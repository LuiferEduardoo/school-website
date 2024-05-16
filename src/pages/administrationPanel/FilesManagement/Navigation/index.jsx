import { useState, useEffect } from "react";
import { Tabs, Tab } from "@nextui-org/react";
import { FaImage } from "react-icons/fa6";
import { FaFile } from "react-icons/fa";
import { useNavigate, useLocation  } from "react-router-dom";

const Navigation = () => {
  const location = useLocation();
  const lastPathSegment = location.pathname.split('/').pop();
  const [selected, setSelected] = useState(lastPathSegment);
  const navigate = useNavigate();

  const handleTabChange  = (e) => {
    setSelected(e);
    navigate(e);
  }
  return (
    <>
      <Tabs 
        aria-label="Options" 
        color="primary" 
        variant="underlined"
        classNames={{
          tabList: "gap-6 w-full relative rounded-none p-0 border-b border-divider",
          cursor: "w-full bg-[#22d3ee]",
          tab: "max-w-fit px-0 h-12",
          tabContent: "group-data-[selected=true]:text-[#06b6d4]"
        }}
        selectedKey={selected}
        onSelectionChange={handleTabChange}
        >
        <Tab
          key="photos"
          title={
            <div className="flex items-center space-x-2">
              <FaImage />
              <span>Fotos</span>
            </div>
          }
        />
        <Tab
          key="documents"
          title={
            <div className="flex items-center space-x-2">
              <FaFile />
              <span>Documentos</span>
            </div>
          }
        />
      </Tabs>
    </>
  );
};

export default Navigation