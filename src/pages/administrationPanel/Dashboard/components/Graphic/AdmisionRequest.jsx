import { Card, Title, AreaChart, DonutChart  } from "@tremor/react";

const chartdata5 = [
    {
        date: "1",
        Running: 10,
    },
    {
        date: "2",
        Running: 5,
    },
    {
        date: "3",
        Running: 4,
    },
    {
        date: "4",
        Running: 15,
    },
    {
        date: "5",
        Running: 20,
    },
    {
        date: "6",
        Running: 30,
    },
    {
        date: "7",
        Running: 25,
    },
    {
        date: "8",
        Running: 20,
    },
    {
        date: "9",
        Running: 40,
    },
];
const grade = [
    {
      name: "9",
      sales: 20,
    },
    {
      name: "8",
      sales: 20,
    },
    {
      name: "1",
      sales: 30,
    },
    {
      name: "6",
      sales: 60,
    },
    {
      name: "4",
      sales: 10,
    },
    {
      name: "5",
      sales: 5,
    },
  ];
  
  const genero = [
    {
      name: "Masculino",
      sales: 60,
    },
    {
      name: "Femino",
      sales: 80,
    },
  ];

  const sede = [
    {
      name: "1",
      sales: 20,
    },
    {
        name: "2",
        sales: 120,
    },
  ];

  const states = [
    {
      name: "Admitido",
      sales: 40,
    },
    {
        name: "No admitido",
        sales: 20,
    },
    {
        name: "En revisión",
        sales: 70,
    }
  ];
  const customTooltip = ({ payload, active }) => {
    if (!active || !payload) return null;
    return (
        <div className="w-56 rounded-tremor-default text-tremor-default bg-tremor-background p-2 shadow-tremor-dropdown border border-tremor-border">
            {payload.map((category, idx) => (
            <div key={idx} className="flex flex-1 space-x-2.5">
                <div className={`w-1 flex flex-col bg-${category.color}-500 rounded`} />
                <div className="space-y-1">
                <p className="text-tremor-content">{category.dataKey}</p>
                <p className="font-medium text-tremor-content-emphasis">{category.value} bpm</p>
                </div>
            </div>
            ))}
        </div>
    );
};
const AdmisionRequest = () => {
    return (
        <div className='flex flex-col mt-10 gap-4  lg:grid grid-cols-4'>
                <Card className='col-span-4'>
                    <Title>Solictud de admisión</Title>
                    <AreaChart
                    className="h-72 mt-4"
                    data={chartdata5}
                    index="date"
                    categories={["Running"]}
                    colors={["blue"]}
                    yAxisWidth={30}
                    customTooltip={customTooltip}
                    />
                </Card>

                <Card className="mx-auto max-w-xs lg: col-span-1">
                    <Title>Solicitud de admisión por grado</Title>
                    <DonutChart
                        className="mt-6"
                        data={grade}
                        category="sales"
                        index="name"
                        colors={["blue-900", "blue-800", "blue-700", "blue-600", "blue-500", "blue-400"]}
                    />
                </Card>

                <Card className="mx-auto max-w-xs lg: col-span-1">
                    <Title>Solicitud de admisión por genero</Title>
                    <DonutChart
                        className="mt-6"
                        data={genero}
                        category="sales"
                        index="name"
                        colors={["blue-900", "blue-800", "blue-400"]}
                    />
                </Card>

                <Card className="mx-auto max-w-xs lg: col-span-1">
                    <Title>Solicitud de admisión por sede</Title>
                    <DonutChart
                        className="mt-6"
                        data={sede}
                        category="sales"
                        index="name"
                        colors={["blue-500", "blue-400"]}
                    />
                </Card>

                <Card className="mx-auto max-w-xs lg: col-span-1">
                    <Title>Estado Solicitud de admisión</Title>
                    <DonutChart
                        className="mt-6"
                        data={states}
                        category="sales"
                        index="name"
                        colors={["green-500", "red-500",  "blue-400"]}
                    />
                </Card>

            </div>
    )
};

export default AdmisionRequest