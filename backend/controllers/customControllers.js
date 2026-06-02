import CustomRequest from "../models/CustomRequest.js";
import resend from "../config/resend.js";

export const sendCustomRequest = async (req, res) => {
    try {
        console.log("CUSTOM REQUEST RECEIVED:", req.body);
        const data = req.body;

        // ✅ better validation (not just empty check)
        if (!data || Object.keys(data).length === 0) {
            return res.status(400).json({
                success: false,
                message: "Request data is missing"
            });
        }

        // 🗄️ Save to MongoDB
        const savedRequest = await CustomRequest.create(data);

        // 📧 Send email via Resend
        await resend.emails.send({
            from: "Noori Carpets <onboarding@resend.dev>",

            // ⚠️ CHANGE THIS to your real email
            to: "your-email@example.com",

            subject: "🧵 New Custom Carpet Request",

            html: `
                <h2>New Custom Carpet Request</h2>
                <p><b>Name:</b> ${data.name || "N/A"}</p>
                <p><b>Email:</b> ${data.email || "N/A"}</p>
                <p><b>Size:</b> ${data.size || "N/A"}</p>
                <p><b>Message:</b> ${data.message || "N/A"}</p>
                <hr/>
                <h3>Full Data:</h3>
                <pre>${JSON.stringify(data, null, 2)}</pre>
            `,
        });

        return res.status(200).json({
            success: true,
            message: "Custom request sent successfully",
            data: savedRequest
        });

    } catch (error) {
        console.error("Custom Request Error:", error);

        return res.status(500).json({
            success: false,
            message: "Server error while sending custom request"
        });
    }
};