const Authoticated = ({children})=> {
    const token = localStorage.getItem("token");
    if (!token) return <div>Unauthorized</div>

    return children
};

export default Authoticated;