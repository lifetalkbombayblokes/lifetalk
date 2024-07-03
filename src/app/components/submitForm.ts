import supabase from '@/utils/supabase';
import { revalidatePath } from 'next/cache';

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
            ])
            .select();

        if (error) {
            console.error("Error inserting data:", error);
            return { success: false, message: 'There was an error submitting the form. Please try again.' };
        }

        console.log(data);
        revalidatePath("/");
        return { success: true, message: 'Form submitted successfully!' };
    } catch (error) {
        console.error("Unexpected error:", error);
        return { success: false, message: 'Unexpected error occurred. Please try again.' };
    }
};
