import supabase from '@/utils/supabase';
// import { revalidatePath } from 'next/cache';

type SubmitFormResponse = {
    success: boolean;
    message: string;
};

export const submitForm = async (formData: FormData): Promise<SubmitFormResponse> => {
    const fname = formData.get("fname") as string;
    const lname = formData.get("lname") as string;
    const email = formData.get("email") as string;
    const tel = formData.get("tel") as string;
    const des = formData.get("des") as string;
    const com = formData.get("com") as string;
    const mess = formData.get("mess") as string;

    // Log form data for debugging
    console.log("Form Data:", { fname, lname, email, tel, des, com, mess });

    try {
        const { data, error } = await supabase
            .from("formData")
            .insert([
                {
                    fname,
                    lname,
                    email,
                    tel,
                    des,
                    com,
                    mess,
                },
            ]);

        // Check for Supabase error
        if (error) {
            console.error("Supabase error:", error.message);
            return { success: false, message: 'There was an error submitting the form. Please try again. Reason ' + error.message };
        }

        // Log the returned data for debugging
        console.log("Inserted Data:", data);

        // Revalidate the path if applicable (Next.js specific)
        // revalidatePath('/');

        return { success: true, message: 'Form submitted successfully!' };
    } catch (unexpectedError) {
        console.error("Unexpected error:", unexpectedError);
        return { success: false, message: 'Unexpected error occurred. Please try again.' };
    }
};
