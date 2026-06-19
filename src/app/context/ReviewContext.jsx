import {
    createContext,
    useContext,
    useEffect,
    useState,
    useCallback,
} from "react";
import axios from "axios";

const ReviewContext = createContext();

export const ReviewProvider = ({ children }) => {
    const [reviews, setReviews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    const fetchReviews = useCallback(async () => {
        try {
            setLoading(true);

            const res = await axios.get(
                "http://localhost:1337/api/reviews"
            );

            // change according to your API
            setReviews(res.data.data || res.data);

            setError(null);
        } catch (err) {
            console.error(err);
            setError(err.message || "Something went wrong");
        } finally {
            setLoading(false);
        }
    }, []);

    useEffect(() => {
        fetchReviews();
    }, [fetchReviews]);

    const value = {
        reviews,
        setReviews,
        loading,
        error,
        refreshReviews: fetchReviews,
    };

    return (
        <ReviewContext.Provider value={value}>
            {children}
        </ReviewContext.Provider>
    );
};

export const useReviewContext = () => {
    const context = useContext(ReviewContext);

    if (!context) {
        throw new Error(
            "useReviewContext must be used inside ReviewProvider"
        );
    }

    return context;
};