const Link = ({to, children,...props } )=> {

    function handler(e){
        e.preventDefault();
        history.pushState({}, "", to);
        const locationNavigate = new Event("navigate");
        window.dispatchEvent(locationNavigate);
    }


    return <a href={to} onClick={handler} {...props}>{children}</a>
};

export default Link;