import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export async function POST(request: Request) {
  try {
    const { name, email, phone, service, message } = await request.json();

    // التأكد من وجود البيانات في ملف الـ .env
    if (!process.env.EMAIL_USER || !process.env.EMAIL_PASS) {
      console.error("خطأ: بيانات الإيميل غير موجودة في ملف الـ .env");
      return NextResponse.json({ success: false, error: "Configuration Error" }, { status: 500 });
    }

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER, // هيقرأ من الـ .env
        pass: process.env.EMAIL_PASS, // هيقرأ الـ 16 حرف من الـ .env
      },
    });

    const mailOptions = {
      from: `"موقع الرهاوي" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_USER, // الإيميل اللي هيستلم رسايل العملاء
      replyTo: email, 
      subject: `طلب خدمة جديد: ${service}`,
      html: `
        <div style="direction: rtl; font-family: Arial, sans-serif; border: 1px solid #ddd; padding: 20px; border-radius: 10px;">
          <h2 style="color: #1e40af;">تفاصيل استفسار جديد من موقع الرهاوي:</h2>
          <hr />
          <p><strong>الاسم:</strong> ${name}</p>
          <p><strong>رقم الهاتف:</strong> ${phone}</p>
          <p><strong>الإيميل:</strong> ${email}</p>
          <p><strong>الخدمة المطلوبة:</strong> ${service}</p>
          <div style="background: #f9f9f9; padding: 15px; border-radius: 5px; margin-top: 10px;">
            <strong>الرسالة:</strong><br />
            ${message}
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    return NextResponse.json({ success: true }, { status: 200 });
  } catch (error) {
    console.error("Nodemailer Error:", error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}