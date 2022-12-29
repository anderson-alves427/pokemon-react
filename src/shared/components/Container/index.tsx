import "./styles.css";

interface IContainerProps {
    children: React.ReactNode;
}

export const Container = ( {children }: IContainerProps) => {
    return(
        <div className="container-master">
            {children}
        </div>
    );
}