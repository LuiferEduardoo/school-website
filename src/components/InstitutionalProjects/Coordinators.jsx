import { User } from "@nextui-org/react";

const Coordinators = (props) => {
    return (
        props.coordinators?.length > 0 && (
            <section className="container px-4 py-6 md:px-6 space-y-4">
                <h2 className="text-2xl font-bold tracking-tighter">
                    {props.coordinators?.length > 1 ? (
                        <>Coordinadores</>
                    ) : (
                        <>Coordinador</>
                    )}:
                </h2>
                {props.coordinators.map((coordinator) => (
                    <div className="space-y-6">
                        <User
                            key={coordinator.id}
                            name={`${
                                coordinator.user.name?.charAt(0)?.toUpperCase() +
                                coordinator.user.name?.slice(1)
                            } ${
                                coordinator.user.lastName
                                    ?.charAt(0)
                                    ?.toUpperCase() +
                                coordinator.user.lastName?.slice(1)
                            }`}
                            description={`${
                                coordinator.user.rol?.[0].rol
                                    ?.charAt(0)
                                    ?.toUpperCase() +
                                coordinator.user?.rol?.[0].rol?.slice(1)
                            }`}
                            avatarProps={{
                                src: coordinator.user?.image?.[0]?.image?.file?.url,
                            }}
                        />
                    </div>
                ))}
            </section>
        )
    );
};

export default Coordinators;