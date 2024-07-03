import supabase from '@/utils/supabase';
// import { revalidatePath } from 'next/cache';

type SubmitFormResponse = {
    success: boolean;
    message: string;
    fieldErrors?: {
        email?: string;
        tel?: string;
    };
};

export const submitForm = async (formData: FormData): Promise<SubmitFormResponse> => {
    const fname = formData.get("fname") as string;
    const lname = formData.get("lname") as string;
    const email = formData.get("email") as string;
    const tel = formData.get("tel") as string;
    const des = formData.get("des") as string;
    const com = formData.get("com") as string;
    const mess = formData.get("mess") as string;

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

        if (error) {
            console.error("Supabase error:", error.message);

            const fieldErrors: { email?: string; tel?: string } = {};
            if (error.code === '23505') {
                if (error.message.includes('formdata_tel_key')) {
                    fieldErrors.tel = 'This phone number is already in use.';
                }
                if (error.message.includes('formdata_email_key')) {
                    fieldErrors.email = 'This email is already in use.';
                }
            }

            return { success: false, message: 'There was an error submitting the form. Please try again.', fieldErrors };
        }

        console.log("Inserted Data:", data);
        // revalidatePath('/');
        return { success: true, message: 'Form submitted successfully!' };
    } catch (unexpectedError) {
        console.error("Unexpected error:", unexpectedError);
        return { success: false, message: 'Unexpected error occurred. Please try again.' };
    }
};
