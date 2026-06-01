import CustomRequest from "../models/CustomRequest.js";
import resend from "../config/resend.js";

export const sendCustomRequest = async (req, res) => {
    try {

        const data = req.body;

        if (!data) {
            return res.status(400).json({
                success: false,
                message: "Request data is missing"
            });
        }

        // Save to MongoDB
        await CustomRequest.create(data);

        // Send email via Resend
        await resend.emails.send({
            from: "Noori Carpets <onboarding@resend.dev>",
            to: "your-email@example.com", // CHANGE THIS
            subject: "New Custom Carpet Request",
            html: `
                <h3>New Custom Carpet Request</h3>
                <pre>${JSON.stringify(data, null, 2)}</pre>
            `,
        });

        res.status(200).json({
            success: true,
            message: "Custom request sent successfully"
        });

    } catch (error) {
        console.error("Custom Request Error:", error.message);

        res.status(500).json({
            success: false,
            message: "Server error"
        });
    }
};