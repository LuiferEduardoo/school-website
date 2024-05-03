import {
  Autocomplete,
  AutocompleteItem,
  User,
  Button,
  Checkbox,
} from "@nextui-org/react";
import { useContext, useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";
import { AuthContext } from "../../../../../providers/AuthContext";
import { getUsers } from "../../../../../services/user.service";
import { getInstitutionalProyects } from "../../../../../services/institutitionalProjects.service";

const MemberOrAuthor = (props) => {
  const { accessToken, setAccessToken, refreshToken, setRefreshToken } =
    useContext(AuthContext);
  const [value, setValue] = useState("");
  const [isLoading, setLoading] = useState(true);

  const [userToSelect, setUserToselect] = useState([]);

  const users = [...props.users, ...props.existingUsers];
  
  useEffect(() => {
    const statusButton = (status) => {
      props.setIsDisabledNext(status);
      props.setIsDisabledAction(status);
    }
    if(props.publication){
      statusButton(false)
    } else {
      if(users.length !== 0){
        statusButton(false)
        if(props.isCoordinator){
          users.map(u => u.isCoordinator).includes(true) ? statusButton(false) : statusButton(true)
        }
      } else{
        statusButton(true)
      }
    }
  }, [props.users, props.existingUsers, users])

  useEffect(() => {
    const callToAPI = async () => {
      try {
        let response;
        if(props.publication){
          const {members} = await getInstitutionalProyects(
            accessToken,
            setAccessToken,
            refreshToken,
            setRefreshToken, 
            {}, 
            props.publication
          )
          response = members.map(m => m.user);
        } else {
          const {elements} = await getUsers(
            accessToken,
            setAccessToken,
            refreshToken,
            setRefreshToken
          );
          response = elements
        }
        if (
          props.membersToInstitutionalProyects &&
          props.membersToInstitutionalProyects?.length !== 0
        ) {
          const filteredUsers = response?.filter((user) =>
            props.membersToInstitutionalProyects?.includes(user.id)
          );
          setUserToselect(filteredUsers);
        } else {
          setUserToselect(response);
        }
      } finally {
        setLoading(false);
      }
    };
    callToAPI();
  }, [isLoading]);

  const handleAdd = () => {
    const userExistin = props.usersDefault.filter(user => user.idUser === parseInt(value));
    const isCoordinator = userExistin[0]?.isCoordinator || false;
    let dataToAdd = props.isCoordinator
      ? { id: value, isCoordinator}
      : { id: value };
    if(userExistin.length > 0){
      dataToAdd.isExisting = true
      dataToAdd.id = userExistin[0].id
      dataToAdd.idUser = userExistin[0].idUser
    }
    let setSaveData; 
    if(props.usersDefault.map(u => u.idUser).includes(parseInt(value))){
      setSaveData = props.setExistingUsers;
    } else {
      setSaveData = props.setUsers;
    }
    setSaveData((prevUsers) => [dataToAdd, ...prevUsers]);
    const userToDelete = Array.from(props.idEliminateExistingUsers).find(user => user.idUser === parseInt(value));
    if (userToDelete) {
        props.setIdEliminateExistingUsers(prevIds => {
            const newIds = new Set(prevIds);
            newIds.delete(userToDelete);
            return newIds;
        });
    }
    setValue(""); // Limpiar el valor después de agregar el usuario
  };

  const removeUser = (user) => {
    if (user.isExisting) {
      props.setExistingUsers((prevUsers) => {
        const updatedUsers = prevUsers.filter((u) => u !== user);
        const updatedIdSet = new Set(props.idEliminateExistingUsers);
        if(![...props.idEliminateExistingUsers].map(i => i.id).includes(user.id)){
          updatedIdSet.add({id: user.id, idUser: user.idUser});
          props.setIdEliminateExistingUsers(updatedIdSet);
        }
        return updatedUsers;
      });
    } else {
      props.setUsers((prevUsers) => {
        const updatedUsers = prevUsers.filter((u) => u !== user);
        return updatedUsers;
      });
    }
  };

  const handleCoordinator = (e, user) => {
    let statusToUpdate;
    if (user.isExisting) {
      statusToUpdate = props.setExistingUsers;
    } else {
      statusToUpdate = props.setUsers;
    }
    statusToUpdate((prevUsers) =>
      prevUsers.map((prevUser) => {
        if (prevUser.id === user.id) {
          return { ...prevUser, isCoordinator: e.target.checked };
        }
        return prevUser;
      })
    );
  };

  return (
    <>
      <section>
        <header className="flex items-center gap-2">
          <Autocomplete
            isLoading={isLoading}
            label={`${
              props.author ? "Seleccione el autor" : "Seleccione el miembro"
            }`}
            size="sm"
            variant="bordered"
            defaultItems={userToSelect.filter((user) =>
              !users.map((u) => Number(u.idUser)).includes(user.id)
            )}
            selectedKey={value}
            allowsCustomValue={true}
            onSelectionChange={setValue}
          >
            {(item) => (
              <AutocompleteItem
                key={item.id}
                textValue={`${
                  item.name?.charAt(0)?.toUpperCase() + item.name?.slice(1)
                } ${
                  item.lastName?.charAt(0)?.toUpperCase() +
                  item.lastName?.slice(1)
                }`}
              >
                <User
                  key={item.id}
                  name={`${
                    item.name?.charAt(0)?.toUpperCase() + item.name?.slice(1)
                  } ${
                    item.lastName?.charAt(0)?.toUpperCase() +
                    item.lastName?.slice(1)
                  }`}
                  description={`${
                    item.rol?.[0].rol?.charAt(0)?.toUpperCase() +
                    item?.rol?.[0].rol?.slice(1)
                  }`}
                  avatarProps={{
                    src: item?.image?.[0]?.image?.file?.url,
                  }}
                />
              </AutocompleteItem>
            )}
          </Autocomplete>
          <Button isDisabled={!value} onPress={handleAdd} color="primary">
            Agregar
          </Button>
        </header>
        <section className="mt-10">
          {users.map((userId, index) => {
            const dataToVerify = userId.isExisting ? userId.idUser : userId.id;
            const user = userToSelect.find((u) => u.id == dataToVerify);
            if (!user) return null; // Si el usuario no se encuentra en userToSelect, no lo muestra
            return (
              <div
                key={index}
                className="flex justify-between items-center w-full gap-4 mt-4"
              >
                <User
                  name={`${
                    user.name?.charAt(0)?.toUpperCase() + user.name?.slice(1)
                  } ${
                    user.lastName?.charAt(0)?.toUpperCase() +
                    user.lastName?.slice(1)
                  }`}
                  description={`${
                    user.rol?.[0].rol?.charAt(0)?.toUpperCase() +
                    user?.rol?.[0].rol?.slice(1)
                  }`}
                  avatarProps={{
                    src: user?.image?.[0]?.image?.file?.url,
                  }}
                />
                <div className="flex gap-4">
                  {props.isCoordinator && (
                    <Checkbox
                      size="sm"
                      radius="full"
                      isSelected={users[index].isCoordinator}
                      onChange={(event) => {
                        handleCoordinator(event, userId);
                      }}
                    >
                      Coordinador
                    </Checkbox>
                  )}
                  <RiDeleteBin6Line
                    onClick={() => removeUser(userId)}
                    className="text-gray-500 text-lg hover:text-red-500 transition-colors cursor-pointer"
                  />
                </div>
              </div>
            );
          })}
          <div className='mt-10 text-gray-500 text-sm'>
            {props.isCoordinator && (
              <p>Nota: El proyecto institucional por lo menos debe tener un coordinador</p>
            )}
            {props.author && (
              <p>Nota: No es necesario que te agregues como autor, ya que tu nombre ya aparecerá automáticamente.</p>
            )}
          </div>
        </section>
      </section>
    </>
  );
};

export default MemberOrAuthor;