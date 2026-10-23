import { Plus } from 'lucide-react';
import { site, vehicles, fmtMin } from '@/config/site';
import { pick, fmtMinL } from '@/lib/i18n';

const QA_EN = () => [
  ['How is the fare decided?', 'Your fare depends on the vehicle, the road distance, any stops on the way and the tolls on your route. The app shows the complete price before you confirm — no bargaining and no hidden charges.'],
  ['Is the price fixed or can it change?', 'The price you confirm is final. Tolls on your route are already included in it. Only waiting beyond the free time and parking fees, if any, are extra.'],
  ['Are tolls charged on every trip?', 'No. A toll is added only when your route actually passes a toll naka or toll bridge — like the Sea Link or Atal Setu. Small goods vehicles pay no toll at Mumbai\u2019s entry points, so most city trips have no toll at all.'],
  ...(site.freeCancel ? [['Is there a cancellation charge?', 'No. You can cancel without a fee; the app only asks for a reason. If the driver has already reached you, they get the next nearby trip first, so please cancel as early as you can if your plans change.']] : []),
  ['How much time is included for loading and unloading?', `Every booking includes one free time for loading and unloading together: ${vehicles.map((v) => `${v.name} ${fmtMin(v.freeMin)}`).join(', ')}. It starts when the driver reaches the pickup, pauses while driving, and goes on at the drop until delivery. After it, a small per-minute waiting charge is added, shown live in the app. The customer and the driver see the same timer.`],
  ['What if the driver marks "arrived" before reaching?', 'The app checks the driver\u2019s location. A driver who slides "arrived" from far away gets a warning, and the free time starts only when the driver is really within 1 km of the pickup or you share the OTP. The same check happens at the drop.'],
  ['What if my driver can’t make it?', 'If a driver can’t come, or is not moving towards the pickup, we find another driver at the same fare. You can also tap "Get another driver" in the app.'],
  ['What if I am not at the pickup?', 'The driver waits 10 minutes after reaching. If you still can\u2019t be found, the driver can cancel, and the app asks you whether you were there. If you were, tap "No, I was there" and our team checks it.'],
  ['Can the fare change during the trip?', 'No. The customer pays the fare shown in the app, plus a waiting charge only if loading and unloading take longer than the free time. If anyone asks for a different amount, report it in the app or call us.'],
  ['How do I pay?', 'Two ways: Cash (cash or UPI paid straight to the driver after delivery), or Drovika Wallet (the fare is taken from your wallet balance when you book).'],
  ['What is Drovika Wallet?', 'A prepaid balance in the app, made for shops and businesses that book often. Add money once with UPI, card or netbanking (secured by Razorpay) and pay every booking from it. If a wallet booking is cancelled, the money comes back to your wallet straight away. Wallet money can be used only for Drovika bookings.'],
  ['What if something goes wrong during a trip?', 'Open the trip in the app and tap "Need help with this trip?". Ask Drovika to call you, or call or WhatsApp us directly. Our team sees your trip details and helps right away.'],
  ['Can I deliver to more than one place in one trip?', 'Yes. Add up to 3 stops between your pickup and final drop. The driver goes to each stop in order, and a small charge for each extra stop is included in the price you see before booking.'],
  ['Can I book for later?', 'Yes. Choose "Schedule" while booking and pick a day and time up to 7 days ahead. We start finding your driver 15 minutes before your pickup time and notify you. You can cancel a scheduled booking for free before it starts.'],
  ['Do you have offers?', `Yes. Offers and coupons appear on the booking screen in the app, and the discount is shown before you confirm.${site.firstTripOffer ? ` New customers get ${site.firstTripOffer.charAt(0).toLowerCase()}${site.firstTripOffer.slice(1)}.` : ''}`],
  ['Which areas do you cover?', 'All of Mumbai, the Thane district (Thane, Mira-Bhayandar, Bhiwandi, Kalyan, Dombivli, Ulhasnagar, Ambernath, Badlapur and Titwala), Navi Mumbai (Vashi to Panvel, Taloja and Uran) and the Vasai to Palghar belt. Your pickup, drop and every stop need to be inside this zone.'],
  ['What can I not send?', 'Illegal items, explosives, weapons, drugs, flammable chemicals and anything banned by law. Please describe your goods honestly while booking.'],
  ['How are drivers verified?', 'Every driver uploads their driving licence, vehicle RC, Aadhaar, PAN and a vehicle photo. Our team checks them before the driver can go online.'],
  ['I own a vehicle. How do I join as a driver?', 'Download the Drovika Partner app, sign up with your mobile number, upload your documents and vehicle details, and start taking trips once you are verified.'],
];


const freeList = (lang) => vehicles.map((v) => `${v.name} ${fmtMinL(v.freeMin, lang)}`).join(', ');

const QA_HI = () => [
  ['किराया कैसे तय होता है?', 'किराया गाड़ी, सड़क की दूरी, रास्ते के स्टॉप और रूट के टोल पर निर्भर करता है। कन्फ़र्म करने से पहले ऐप पूरा किराया दिखाता है — न मोलभाव, न कोई छुपा चार्ज।'],
  ['किराया पक्का है या बदल सकता है?', 'जो किराया आप कन्फ़र्म करते हैं वही फ़ाइनल है। रूट के टोल उसमें पहले से जुड़े हैं। सिर्फ़ फ़्री समय के बाद का वेटिंग और पार्किंग फ़ीस (अगर हो) अलग है।'],
  ['क्या हर ट्रिप पर टोल लगता है?', 'नहीं। टोल तभी जुड़ता है जब आपका रूट सच में किसी टोल नाके या टोल ब्रिज से गुज़रे — जैसे सी लिंक या अटल सेतु। मुंबई के एंट्री पॉइंट पर छोटी माल गाड़ियों को टोल नहीं लगता, इसलिए शहर की ज़्यादातर ट्रिप में कोई टोल नहीं होता।'],
  ...(site.freeCancel ? [['क्या कैंसल करने का चार्ज है?', 'नहीं। आप बिना फ़ीस के कैंसल कर सकते हैं; ऐप सिर्फ़ कारण पूछता है। अगर ड्राइवर आपके पास पहुँच चुका है, तो उसे पास की अगली ट्रिप पहले मिलती है, इसलिए प्लान बदले तो जितनी जल्दी हो सके कैंसल करें।']] : []),
  ['लोडिंग और अनलोडिंग के लिए कितना समय फ़्री है?', `हर बुकिंग में लोडिंग और अनलोडिंग दोनों के लिए मिलाकर एक फ़्री समय मिलता है: ${freeList('hi')}। यह ड्राइवर के पिकअप पर पहुँचते ही शुरू होता है, गाड़ी चलते समय रुकता है, और ड्रॉप पर डिलीवरी तक चलता है। इसके बाद हर मिनट का थोड़ा वेटिंग चार्ज जुड़ता है, जो ऐप में लाइव दिखता है। ग्राहक और ड्राइवर दोनों एक ही टाइमर देखते हैं।`],
  ['अगर ड्राइवर पहुँचने से पहले "पहुँच गया" दबा दे तो?', 'ऐप ड्राइवर की लोकेशन जाँचता है। ड्राइवर दूर से "पहुँच गया" करे तो उसे चेतावनी मिलती है, और फ़्री समय तभी शुरू होता है जब ड्राइवर सच में पिकअप के 1 km के अंदर पहुँचे या आप OTP दें। ड्रॉप पर भी यही जाँच होती है।'],
  ['अगर मेरा ड्राइवर नहीं आ पाए तो?', 'अगर ड्राइवर नहीं आ सकता, या पिकअप की तरफ़ नहीं बढ़ रहा, तो हम उसी किराए में दूसरा ड्राइवर ढूँढते हैं। आप ऐप में "दूसरा ड्राइवर" भी दबा सकते हैं।'],
  ['अगर मैं पिकअप पर न मिलूँ तो?', 'ड्राइवर पहुँचने के बाद 10 मिनट इंतज़ार करता है। फिर भी आप न मिलें, तो ड्राइवर कैंसल कर सकता है, और ऐप आपसे पूछता है कि क्या आप वहाँ थे। अगर थे, तो "नहीं, मैं वहाँ था" दबाएँ, हमारी टीम जाँच करेगी।'],
  ['क्या ट्रिप के दौरान किराया बदल सकता है?', 'नहीं। ग्राहक ऐप में दिखा किराया देता है, और वेटिंग चार्ज सिर्फ़ तब जब लोडिंग-अनलोडिंग फ़्री समय से ज़्यादा चले। अगर कोई अलग रकम माँगे, तो ऐप में रिपोर्ट करें या हमें कॉल करें।'],
  ['पेमेंट कैसे करें?', 'दो तरीके: कैश (डिलीवरी के बाद ड्राइवर को सीधे कैश या UPI), या Drovika वॉलेट (बुक करते समय किराया वॉलेट बैलेंस से कटता है)।'],
  ['Drovika वॉलेट क्या है?', 'ऐप में एक प्रीपेड बैलेंस, जो बार-बार बुक करने वाली दुकानों और बिज़नेस के लिए बना है। एक बार UPI, कार्ड या नेटबैंकिंग से पैसे जोड़ें (Razorpay से सुरक्षित) और हर बुकिंग उसी से करें। वॉलेट वाली बुकिंग कैंसल हो तो पैसे तुरंत वॉलेट में वापस आते हैं। वॉलेट के पैसे सिर्फ़ Drovika बुकिंग के लिए हैं।'],
  ['ट्रिप के दौरान कुछ गड़बड़ हो तो?', 'ऐप में ट्रिप खोलें और "इस ट्रिप में मदद चाहिए?" दबाएँ। Drovika से कॉल बैक माँगें, या हमें सीधे कॉल या WhatsApp करें। हमारी टीम आपकी ट्रिप की जानकारी देखकर तुरंत मदद करती है।'],
  ['क्या एक ट्रिप में एक से ज़्यादा जगह डिलीवरी कर सकते हैं?', 'हाँ। पिकअप और आखिरी ड्रॉप के बीच 3 स्टॉप तक जोड़ें। ड्राइवर क्रम से हर स्टॉप पर जाता है, और हर एक्स्ट्रा स्टॉप का छोटा चार्ज बुकिंग से पहले दिखे किराए में ही जुड़ा होता है।'],
  ['क्या बाद के लिए बुक कर सकते हैं?', 'हाँ। बुक करते समय "शेड्यूल" चुनें और 7 दिन तक का दिन और समय चुनें। पिकअप के समय से 15 मिनट पहले हम ड्राइवर ढूँढना शुरू करते हैं और आपको बताते हैं। शेड्यूल बुकिंग शुरू होने से पहले फ़्री में कैंसल कर सकते हैं।'],
  ['क्या कोई ऑफ़र है?', `हाँ। ऑफ़र और कूपन ऐप की बुकिंग स्क्रीन पर दिखते हैं, और छूट कन्फ़र्म करने से पहले दिखती है।${site.firstTripOffer ? ' नए ग्राहकों को पहली ट्रिप पर ₹50 तक की छूट मिलती है।' : ''}`],
  ['आप किन इलाकों में चलते हैं?', 'पूरा मुंबई, ठाणे ज़िला (ठाणे, मीरा-भायंदर, भिवंडी, कल्याण, डोंबिवली, उल्हासनगर, अंबरनाथ, बदलापुर और टिटवाळा), नवी मुंबई (वाशी से पनवेल, तळोजा और उरण) और वसई से पालघर तक। आपका पिकअप, ड्रॉप और हर स्टॉप इस ज़ोन के अंदर होना चाहिए।'],
  ['क्या नहीं भेज सकते?', 'गैरकानूनी सामान, विस्फोटक, हथियार, ड्रग्स, ज्वलनशील केमिकल और कानून से मना कोई भी चीज़। बुक करते समय अपने सामान की सही जानकारी दें।'],
  ['ड्राइवर कैसे वेरिफ़ाई होते हैं?', 'हर ड्राइवर अपना ड्राइविंग लाइसेंस, गाड़ी की RC, आधार, पैन और गाड़ी की फ़ोटो अपलोड करता है। ड्राइवर ऑनलाइन होने से पहले हमारी टीम इन्हें जाँचती है।'],
  ['मेरे पास गाड़ी है। ड्राइवर के रूप में कैसे जुड़ूँ?', 'Drovika Partner ऐप डाउनलोड करें, मोबाइल नंबर से साइन अप करें, अपने डॉक्यूमेंट और गाड़ी की जानकारी अपलोड करें, और वेरिफ़ाई होते ही ट्रिप लेना शुरू करें।'],
];

const QA_MR = () => [
  ['भाडे कसे ठरते?', 'भाडे गाडी, रस्त्याचे अंतर, वाटेतील स्टॉप आणि मार्गावरील टोल यावर ठरते. कन्फर्म करण्याआधी ॲप पूर्ण भाडे दाखवते — ना घासाघीस, ना लपलेला चार्ज.'],
  ['भाडे पक्के आहे की बदलू शकते?', 'जे भाडे तुम्ही कन्फर्म करता तेच अंतिम आहे. मार्गावरील टोल त्यात आधीच जोडलेले असतात. फक्त मोफत वेळेनंतरचे वेटिंग आणि पार्किंग फी (असल्यास) वेगळे आहे.'],
  ['प्रत्येक ट्रिपवर टोल लागतो का?', 'नाही. तुमचा मार्ग खरंच एखाद्या टोल नाक्यावरून किंवा टोल पुलावरून जात असेल — जसे सी लिंक किंवा अटल सेतू — तेव्हाच टोल जोडला जातो. मुंबईच्या एंट्री पॉइंटवर छोट्या मालवाहू गाड्यांना टोल नाही, त्यामुळे शहरातील बहुतेक ट्रिपमध्ये टोल नसतो.'],
  ...(site.freeCancel ? [['कॅन्सल करण्याचा चार्ज आहे का?', 'नाही. तुम्ही कोणत्याही फीशिवाय कॅन्सल करू शकता; ॲप फक्त कारण विचारते. ड्रायव्हर तुमच्यापर्यंत पोहोचला असेल, तर त्याला जवळची पुढची ट्रिप आधी मिळते, म्हणून प्लॅन बदलला तर शक्य तितक्या लवकर कॅन्सल करा.']] : []),
  ['लोडिंग आणि अनलोडिंगसाठी किती वेळ मोफत आहे?', `प्रत्येक बुकिंगमध्ये लोडिंग आणि अनलोडिंग दोन्हीसाठी मिळून एक मोफत वेळ मिळतो: ${freeList('mr')}. ड्रायव्हर पिकअपला पोहोचताच तो सुरू होतो, गाडी चालताना थांबतो, आणि ड्रॉपवर डिलिव्हरीपर्यंत चालतो. त्यानंतर प्रत्येक मिनिटाचा थोडा वेटिंग चार्ज जोडला जातो, जो ॲपमध्ये लाइव्ह दिसतो. ग्राहक आणि ड्रायव्हर दोघेही एकच टायमर पाहतात.`],
  ['ड्रायव्हरने पोहोचण्याआधी "पोहोचलो" दाबले तर?', 'ॲप ड्रायव्हरचे लोकेशन तपासते. ड्रायव्हरने दूरून "पोहोचलो" केले तर त्याला इशारा मिळतो, आणि ड्रायव्हर खरंच पिकअपच्या 1 km आत पोहोचल्यावर किंवा तुम्ही OTP दिल्यावरच मोफत वेळ सुरू होतो. ड्रॉपवरही हीच तपासणी होते.'],
  ['माझा ड्रायव्हर येऊ शकला नाही तर?', 'ड्रायव्हर येऊ शकत नसेल, किंवा पिकअपकडे येत नसेल, तर आम्ही त्याच भाड्यात दुसरा ड्रायव्हर शोधतो. तुम्ही ॲपमध्ये "दुसरा ड्रायव्हर" देखील दाबू शकता.'],
  ['मी पिकअपला नसेन तर?', 'ड्रायव्हर पोहोचल्यानंतर 10 मिनिटे वाट पाहतो. तरीही तुम्ही सापडला नाहीत, तर ड्रायव्हर कॅन्सल करू शकतो, आणि ॲप तुम्हाला विचारते की तुम्ही तिथे होता का. होता, तर "नाही, मी तिथे होतो" दाबा, आमची टीम तपासेल.'],
  ['ट्रिपदरम्यान भाडे बदलू शकते का?', 'नाही. ग्राहक ॲपमध्ये दाखवलेले भाडे देतो, आणि वेटिंग चार्ज फक्त लोडिंग-अनलोडिंग मोफत वेळेपेक्षा जास्त चालले तरच. कोणी वेगळी रक्कम मागितली, तर ॲपमध्ये रिपोर्ट करा किंवा आम्हाला कॉल करा.'],
  ['पेमेंट कसे करायचे?', 'दोन पद्धती: रोख (डिलिव्हरीनंतर ड्रायव्हरला थेट रोख किंवा UPI), किंवा Drovika वॉलेट (बुक करताना भाडे वॉलेट बॅलन्समधून कापले जाते).'],
  ['Drovika वॉलेट म्हणजे काय?', 'ॲपमधील एक प्रीपेड बॅलन्स, जो वारंवार बुक करणाऱ्या दुकानांसाठी आणि व्यवसायांसाठी बनवला आहे. एकदा UPI, कार्ड किंवा नेटबँकिंगने पैसे जोडा (Razorpay ने सुरक्षित) आणि प्रत्येक बुकिंग त्यातूनच करा. वॉलेटची बुकिंग कॅन्सल झाली तर पैसे लगेच वॉलेटमध्ये परत येतात. वॉलेटचे पैसे फक्त Drovika बुकिंगसाठी आहेत.'],
  ['ट्रिपदरम्यान काही गडबड झाली तर?', 'ॲपमध्ये ट्रिप उघडा आणि "या ट्रिपसाठी मदत हवी?" दाबा. Drovika कडून कॉल बॅक मागा, किंवा आम्हाला थेट कॉल किंवा WhatsApp करा. आमची टीम तुमच्या ट्रिपची माहिती पाहून लगेच मदत करते.'],
  ['एका ट्रिपमध्ये एकापेक्षा जास्त ठिकाणी डिलिव्हरी करता येते का?', 'हो. पिकअप आणि शेवटच्या ड्रॉपच्या मध्ये 3 स्टॉपपर्यंत जोडा. ड्रायव्हर क्रमाने प्रत्येक स्टॉपवर जातो, आणि प्रत्येक जादा स्टॉपचा छोटा चार्ज बुकिंगआधी दिसणाऱ्या भाड्यातच जोडलेला असतो.'],
  ['नंतरसाठी बुक करता येते का?', 'हो. बुक करताना "शेड्यूल" निवडा आणि 7 दिवसांपर्यंतचा दिवस आणि वेळ निवडा. पिकअपच्या वेळेच्या 15 मिनिटे आधी आम्ही ड्रायव्हर शोधायला सुरुवात करतो आणि तुम्हाला कळवतो. शेड्यूल बुकिंग सुरू होण्याआधी मोफत कॅन्सल करू शकता.'],
  ['काही ऑफर आहे का?', `हो. ऑफर आणि कूपन ॲपच्या बुकिंग स्क्रीनवर दिसतात, आणि सूट कन्फर्म करण्याआधी दिसते.${site.firstTripOffer ? ' नवीन ग्राहकांना पहिल्या ट्रिपवर ₹50 पर्यंत सूट मिळते.' : ''}`],
  ['तुम्ही कोणत्या भागांत चालता?', 'संपूर्ण मुंबई, ठाणे जिल्हा (ठाणे, मीरा-भायंदर, भिवंडी, कल्याण, डोंबिवली, उल्हासनगर, अंबरनाथ, बदलापूर आणि टिटवाळा), नवी मुंबई (वाशी ते पनवेल, तळोजा आणि उरण) आणि वसई ते पालघर पट्टा. तुमचा पिकअप, ड्रॉप आणि प्रत्येक स्टॉप या झोनमध्ये असायला हवा.'],
  ['काय पाठवता येत नाही?', 'बेकायदेशीर वस्तू, स्फोटके, शस्त्रे, ड्रग्स, ज्वलनशील रसायने आणि कायद्याने बंदी असलेली कोणतीही वस्तू. बुक करताना तुमच्या मालाची खरी माहिती द्या.'],
  ['ड्रायव्हर कसे व्हेरिफाय होतात?', 'प्रत्येक ड्रायव्हर आपले ड्रायव्हिंग लायसन्स, गाडीची RC, आधार, पॅन आणि गाडीचा फोटो अपलोड करतो. ड्रायव्हर ऑनलाइन होण्याआधी आमची टीम हे तपासते.'],
  ['माझ्याकडे गाडी आहे. ड्रायव्हर म्हणून कसे जोडायचे?', 'Drovika Partner ॲप डाउनलोड करा, मोबाइल नंबरने साइन अप करा, तुमची कागदपत्रे आणि गाडीची माहिती अपलोड करा, आणि व्हेरिफाय होताच ट्रिप घ्यायला सुरुवात करा.'],
];

const QA_BY = { en: QA_EN, hi: QA_HI, mr: QA_MR };
const T = {
  en: { eb: 'FAQs', h1: 'Questions', h2: 'Answers', lead: 'Can’t find what you’re looking for? Call us at ' },
  hi: { eb: 'सवाल-जवाब', h1: 'सवाल', h2: 'जवाब', lead: 'जो ढूँढ रहे हैं वो नहीं मिला? हमें कॉल करें: ' },
  mr: { eb: 'प्रश्नोत्तरे', h1: 'प्रश्न', h2: 'उत्तरे', lead: 'हवे ते सापडले नाही? आम्हाला कॉल करा: ' },
};

export default function FAQ({ lang = 'en' }) {
  const t = pick(T, lang);
  const QA = (QA_BY[lang] || QA_EN)();
  return (
    <section className="sec faq" id="faq">
      <div className="wrap faq__row">
        <div className="faq__head rv">
          <span className="eyebrow">{t.eb}</span>
          <h2 className="h-section">{t.h1}<span className="pn">?</span> {t.h2}<span className="pn">.</span></h2>
          <p className="lead">{t.lead}<a className="nowrap" href={`tel:${site.phone.replace(/\s/g, '')}`}>{site.phone}</a>.</p>
        </div>
        <div className="faq__list">
          {QA.map(([q, a], i) => (
            <details key={q} className="qa rv" style={{ '--d': `${i * 0.04}s` }} open={i === 0}>
              <summary>{q}<span className="qa__ic"><Plus size={20} /></span></summary>
              <p>{a}</p>
            </details>
          ))}
        </div>
      </div>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: QA.map(([q, a]) => ({ '@type': 'Question', name: q, acceptedAnswer: { '@type': 'Answer', text: a } })),
          }),
        }}
      />
    </section>
  );
}
