import { useState, useEffect } from "react";
import { Input, Select, SelectItem, Avatar } from "@nextui-org/react";
import userService from "../../../../../services/user.service";

const Form = (props) => {
    const [teacher, setTeacher] = useState('');
    const [name, setName] = useState('');

    useEffect(() => {
        if(teacher !== '' && name !== ''){
            props.setIsDisabled(false);
        } else {
            props.setIsDisabled(true);
        }
    }, [teacher, name]);

    const handleTeacher = (e) => {
        setTeacher(e.target.key);
    };
    return (
        <form className='flex flex-col gap-4'>
            <Input
                isRequired
                value={name}
                onValueChange={setName}
                type="text"
                label="Nombre"
                variant="bordered"
            />
            <Select
                isRequired
                selectedKeys={teacher}
                onChange={handleTeacher}
                items={userService}
                label="Docente"
                variant="bordered"
                labelPlacement="outside"
                classNames={{
                    base: "w-full",
                    trigger: "h-12",
                }}
                renderValue={(items) => {
                    return items.map((item) => (
                    <div key={item.key} className="flex items-center gap-2">
                        <Avatar
                            alt={item.data.name}
                            className="flex-shrink-0"
                            size="sm"
                            src={item.image?.[0]?.image?.file?.url}
                        />
                        <div className="flex flex-col">
                            <span>{item.data.name}</span>
                            <span className="text-default-500 text-tiny">({item.data.email})</span>
                        </div>
                    </div>
                    ));
                }}
                >
                {(user) => (
                    <SelectItem key={user.id} textValue={user.name}>
                        <div className="flex gap-2 items-center">
                            <Avatar alt={user.name} className="flex-shrink-0" size="sm" src={user.avatar} />
                            <div className="flex flex-col">
                            <span className="text-small">{user.name}</span>
                            <span className="text-tiny text-default-400">{user.email}</span>
                            </div>
                        </div>
                    </SelectItem>
                )}
            </Select>
        </form>
    )
}

export default Form