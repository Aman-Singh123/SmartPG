import {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
} from "react";
import axios from "axios";

const PGContext = createContext();

export const PgProvider = ({ children }) => {
    const [PgData, setPgData] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchPGs = useCallback(async () => {
        try {
            setLoading(true);

            const res = await axios.get(
                "http://localhost:1337/api/pgs/?populate=*"
            );

            // change according to your API
            setPgData(res.data.data || res.data);

            setError(null);
        } catch (err) {
            console.error(err);
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchPGs();
    }, [fetchPGs]);

    const value = {
        PgData,
        setPgData,
        loading,
        error,
        refreshReviews: fetchPGs,
    };

    return (
        <PGContext.Provider value={value}>
            {children}
        </PGContext.Provider>
    );
};

export const usePGContext = () => {
    const context = useContext(PGContext);

    if (!context) {
        throw new Error(
            "usePGContext must be used inside PGProvider"
        );
    }

    return context;
};