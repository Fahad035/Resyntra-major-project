    import api from "./axios";

    /*
    |--------------------------------------------------------------------------
    | Get All Papers
    |--------------------------------------------------------------------------
    */

    export const getPapers = async () => {
    const response = await api.get("/papers");

    return response.data;
    };

    /*
    |--------------------------------------------------------------------------
    | Get Single Paper
    |--------------------------------------------------------------------------
    */

    export const getPaper = async (paperId) => {
    const response = await api.get(`/papers/${paperId}`);

    return response.data;
    };

    /*
    |--------------------------------------------------------------------------
    | Upload Paper
    |--------------------------------------------------------------------------
    */

    export const uploadPaper = async (file) => {
    const formData = new FormData();

    formData.append("file", file);

    const response = await api.post(
        "/papers/upload",
        formData,
        {
        headers: {
            "Content-Type": "multipart/form-data",
        },
        }
    );

    return response.data;
    };

    /*
    |--------------------------------------------------------------------------
    | Delete Paper
    |--------------------------------------------------------------------------
    */

    export const deletePaper = async (paperId) => {
    const response = await api.delete(
        `/papers/${paperId}`
    );

    return response.data;
    };