import Contact from "../models/Contact.js";
import resend from "../config/resend.js";

export const sendContact = async (req, res) => {
    try {

        const { name, email, message } = req.body;

        if (!name || !email || !message) {
            return res.status(400).json({
                success: false,
                message: "All fields are required"
            });
        }

        // Save to MongoDB
        await Contact.create({ name, email, message });

        // Send email via Resend
        await resend.emails.send({
            from: "Noori Carpets <onboarding@resend.dev>",
            to: process.env.OWNER_EMAIL,
            subject: "New Contact Message",
            html: `
                <h3>New Contact Message</h3>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong> ${message}</p>
            `,
        });

        res.status(200).json({
            success: true,
            message: "Message sent successfully"
        });

    } catch (error) {
        console.error("Contact Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};