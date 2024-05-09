import {Checkbox} from "@nextui-org/react";
import Password from "./Password";


const PasswordContent = (props) => {
    return (
        <section className='flex flex-col gap-6'>
            <Password 
                label='Contraseña reciente'
                value={props.currentPassword}
                status={props.setCurrentPassword}
            />

            <Password 
                label='Nueva contraseña'
                value={props.newPassword}
                isError
                status={props.setNewPassword}
                passwordError={props.errorNewPassword}
                isDisabled={!props.currentPassword}
                statusError={props.setErrorNewPassword}
            />

            <Password 
                label='Repite la nueva contraseña'
                value={props.repliteNewPassword}
                isError
                status={props.setRepliteNewPassword}
                isDisabled={!props.currentPassword && !props.newPassword}
                passwordError={props.errorRepliteNewPassword}
                statusError={props.setErrorRepliteNewPassword}
                isSame
                otherValue={props.newPassword}
            />
            <div>
                <Checkbox 
                    size="sm"
                    isDisabled={!props.repliteNewPassword || !props.newPassword || !props.repliteNewPassword}
                    isSelected={props.closeOtherDevices}
                    onChange={() => props.setCloseOtherDevices(!props.closeOtherDevices) }
                >
                    Cerrar sesión en los demas dispositivos.
                </Checkbox>
            </div>
        </section>
    )
}

export default PasswordContent