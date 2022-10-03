import {useEffect} from "react";
import {useNavigate} from "react-router-dom";
import PageContentBox from "../components/PageContentBox";

export default function MainPage() {
    const navigate = useNavigate();

    useEffect(() => {
        setTimeout(() => {
            navigate("/");
        }, 3000)
    }, [navigate]);

    return (
        <PageContentBox>
            <h2>Page not found</h2>
            <p>You will be redirected to the start page in 3 seconds.</p>
        </PageContentBox>
    );
}