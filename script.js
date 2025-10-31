// تهيئة واجهة الويب لتيليجرام
const tg = window.Telegram.WebApp;

// يتم استدعاء tg.ready() لتهيئة واجهة الويب 
// وضمان ظهور الأزرار الخاصة بتيليجرام مثل زر الإغلاق
tg.ready();

/**
 * دالة لإرسال أمر إلى البوت (Callback Data) عند ضغط زر
 * * سيقوم البوت الرئيسي (main.py) باستقبال هذه البيانات النصية
 * والتعامل معها كما لو كانت 'callback_query' عادية.
 * * @param {string} callbackData - القيمة التي سيستقبلها البوت (مثل 'menu_private')
 */
function sendCallback(callbackData) {
    // 1. إرسال البيانات إلى البوت باستخدام دالة sendData
    tg.sendData(callbackData);
    
    // 2. إظهار رسالة بسيطة وإغلاق الواجهة بعد الإرسال
    // هذا يحسن تجربة المستخدم. (اختياري)
    tg.showAlert(`تم إرسال الأمر: ${callbackData}`, () => {
        // إغلاق نافذة Web App بعد أن يضغط المستخدم على "موافق"
        tg.close();
    });
}