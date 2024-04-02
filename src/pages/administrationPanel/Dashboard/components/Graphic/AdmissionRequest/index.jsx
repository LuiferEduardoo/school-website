import { useEffect, useContext, useState } from "react";
import { Card, Title, AreaChart, DonutChart } from "@tremor/react";
import { AuthContext } from "../../../../../../providers/AuthContext";
import { getAdmissionRequest } from "../../../../../../services/admissionRequest.service";
import CustomTooltip from "./CustomTooltip";
import { all, grade, gender, campus, states } from "./admissionsRequestData";

const AdmissionRequest = ({ dateRange, setDateRange }) => {
  const { accessToken, refreshToken, setRefreshToken } =
    useContext(AuthContext);
  const [admissionsRequest, setAdmissionsRequest] = useState([]);
  const [isLoading, setIsloading] = useState(true);
  const [allData, setAllData] = useState([]);
  const [gradeData, setGradeData] = useState([]);
  const [genderData, setGenderData] = useState([]);
  const [campusData, setCampusData] = useState([]);
  const [statesData, setStatesData] = useState([]);

  useEffect(() => {
    const getAdmissionRequestCall = async () => {
      try {
        const parameters = {
          startDate: dateRange.from,
          endDate: dateRange.to,
        };
        const responseAdmissionsRequest = await getAdmissionRequest(
          accessToken,
          refreshToken,
          setRefreshToken,
          parameters
        );
        setAdmissionsRequest(responseAdmissionsRequest.elements);
        setAllData(all(admissionsRequest));
        setGradeData(grade(admissionsRequest));
        setGenderData(gender(admissionsRequest));
        setCampusData(campus(admissionsRequest));
        setStatesData(states(admissionsRequest));
      } catch (error) {
      } finally {
        setIsloading(false); // Cuando la solicitud se complete, establece loading en falso
      }
    };
    getAdmissionRequestCall();
  }, [dateRange]);
  return (
    <>
      {isLoading ? (
        <div>Cargando...</div>
      ) : (
        <div className="flex flex-col mt-10 gap-4  lg:grid grid-cols-4">
          <Card className="col-span-4">
            <Title>Solictud de admisión</Title>
            <AreaChart
              className="h-72 mt-4"
              data={allData}
              {...(allData.length > 0 && {
                index: "date",
                categories: "sales",
                colors: ["blue"],
                yAxisWidth: 30,
                customTooltip: CustomTooltip,
              })}
            />
          </Card>

          <Card className="mx-auto max-w-xs lg: col-span-1">
            <Title>Solicitud de admisión por grado</Title>
            <DonutChart
              className="mt-6"
              data={gradeData}
              {...(gradeData.length > 0 && {
                category: "sales",
                index: "name",
                colors: [
                  "blue-900",
                  "blue-800",
                  "blue-700",
                  "blue-600",
                  "blue-500",
                  "blue-400",
                ],
              })}
            />
          </Card>

          <Card className="mx-auto max-w-xs lg: col-span-1">
            <Title>Solicitud de admisión por genero</Title>
            <DonutChart
              className="mt-6"
              data={genderData}
              {...(genderData.length > 0 && {
                category: "sales",
                index: "name",
                colors: ["blue-900", "blue-800", "blue-400"],
              })}
            />
          </Card>

          <Card className="mx-auto max-w-xs lg: col-span-1">
            <Title>Solicitud de admisión por sede</Title>
            <DonutChart
              className="mt-6"
              data={campusData}
              {...(campusData.length > 0 && {
                category: "sales",
                index: "name",
                colors: ["blue-500", "blue-400"],
              })}
            />
          </Card>

          <Card className="mx-auto max-w-xs lg: col-span-1">
            <Title>Estado Solicitud de admisión</Title>
            <DonutChart
              className="mt-6"
              data={statesData}
              {...(statesData.length > 0 && {
                category: "sales",
                index: "name",
                colors: ["green-500", "red-500", "blue-400"],
              })}
            />
          </Card>
        </div>
      )}
    </>
  );
};

export default AdmissionRequest;