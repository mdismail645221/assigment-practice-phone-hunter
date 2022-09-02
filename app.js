// problem number: 1
// ১. একটা অবজেক্ট ডিক্লেয়ার করো। সেই অবজেক্ট এর মিনিমাম পাঁচটা প্রপার্টি থাকবে। তারপর একটা প্রপার্টি এর মান হবে অন্য আরেকটা অবজেক্ট , আরেকটা প্রপার্টি এর মান হবে একটা array । একটা প্রপার্টি এর মান হবে একটা ফাংশন(মেথড) । এই মেথড কে কল করলে সে মেথড এর ভিতর থেকে অবজেক্ট এর যেকোন একটা প্রপার্টি রিটার্ন করবে। আর বাকি দুইটা তোমার ইচ্ছা মতো। 

const Student = {
   name : friends = {
    sakil : 20,
    raju: 15,
    ismail: 16,
    ramisha: 23
   },
   friends : ['sakil', 'raju', 'ramisha', 'tasnim'],
   result: function(){
    return this.friends[2]
   }

};

// console.log(Student.result());
// console.log(Student.name.ismail);
// console.log(Student.friends[1]);


// ২. একটা টেম্পলেট স্ট্রিং দিয়ে একটা স্ট্রিং ভেরিয়েবল ডিক্লেয়ার করো। সেটার মধ্যে উপরের অবজেক্ট এর একটা তিনটা প্রপার্টি এর মান তোমার টেমপ্লেট স্ট্রিং এর মধ্যে বসাও। এর মধ্যে একটা প্রপার্টি সেট করবে--যেটা নেস্টেড অবজেক্ট আছে সেটার প্রপার্টি থেকে। আরেকটা প্রপার্টি হবে যে প্রপার্টি এর মান একটা array সেটার সেকেন্ড পজিশন এর উপাদান দিয়ে। আর বাকি একটা তোমার ইচ্ছা মতো বসাতে পারো। 
const {} = Student;
const template = `My name is ${Student.friends[0]}`;
// console.log(template)

// ৩.১. শূন্য প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে যেটা ৮৯ রিটার্ন করবে। 
const abc = () => {
    return 89;
}
// console.log(abc())

// ৩.২. এক প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন ডিক্লেয়ার করবে। এই ফাংশনের কাজ হবে যে প্যারামিটার নিবে সেটাকে 17 দিয়ে ভাগ করে ভাগফল রিটার্ন করবে। 
const division = (a) =>{
    return a/17;
}

// console.log(division(100))

// ৩.৩ দুই, প্যারামিটার ওয়ালা একটা অ্যারো ফাংশন লিখবে। এই ফাংশনের কাজ হবে যে দুইটা প্যারামিটার ইনপুট নিবে। সেই দুইটা প্যারামিটারকে যোগ করে যোগফলকে দুই দিয়ে ভাগ করে ভাগফল রিটার্ণ করে দাও। 
const twoDivision = (a, b) =>{
    return (a+b)/2;
}
// console.log(twoDivision(10, 10))

// ৩.৪ একাধিক লাইন ওয়ালা অ্যারো ফাংশন লিখো। সেটাতে দুইটা প্যারামিটার নিবে। ওই arrow ফাংশনটা হবে অনেকগুলা লাইনের। সেখানে প্রত্যেকটা ইনপুট প্যারামিটার এর সাথে ৭ যোগ করবে তারপর যোগফল দুইটাকে আবার যোগ করবে। ক্যামনে করবে সেটা চিন্তা করে বের করার চেষ্টা করো। 
// squre kore pathaw

const twoParameter = (a, b) =>{
    const sum =  (a+7)+(b+7);
    return Math.pow(sum, 2)
}
// console.log(twoParameter(3, 3))



// ৪. অনেকগুলা সংখ্যার একটা array হবে। তারপর তোমার কাজ হবে array এর উপরে map ইউজ করে। প্রত্যেকটা উপাদানকে ৭ দিয়ে ভাগ করে ভাগফল আরেকটা array হিসেবে রাখবে। পুরা কাজটা এক লাইনে হবে। 
let totalSum = []
const number = [10, 20, 30, 40, 50];
number.map(num => totalSum.push(num/7))
// console.log(totalSum)

// ৫. জাভাস্ক্রিপ্ট এ array এর map, forEach, filter, find কোনটা দিয়ে কি হয়। সেটার একটা সামারি লিখে ফেলো। 
// উত্তর: ‍অ্যারে এর মধ্যে map, forEach, filter, find এগুলো দিয়ে লুপ করা হয়।

// ম্যাপ(map)
// map হচ্ছে es6 এর একটি ভার্সন। ম্যাপ দিয়ে এ্যারে লুপ করা যায়। অ্যারো ফাংশনের মতো লিখতে হয়। (=>) । ম্যাপ দিয়ৈ একধিক অপারেশন করে তারপর রিটার্ন করা হয়।

// অন্যদিকে forEach()
// ম্যাপ (map)  এর খালাতো ভাই হচ্ছে forEach()। ঠিক সেইম ম্যাপের মত কাজ হয়। শুধু ডিপারেন্ট হচ্ছে ম্যাপে রিটার্ন করা হয়। আর অন্যদিকে forEach() return করা যায় না। forEach() ভিতরে কাজ করে ডাইরেক্ট সেট করা যায়।

//filter হচ্ছে es6 একটি ভার্সন। filter  হচ্ছে কোনো কিছু চাকিয়ে মূল ভেলু গুলো দেখানো। filter কন্ডিশান ব্যবহার হয়। কন্ডিশান দিয়ে মুল ভেলু থেকে ফিল্টার করে ফিল্টার ভেলু বের করা হয়।

// find হচ্ছে es6 একটি ভার্সন। find হচ্ছে ফিল্টারে মতো। জাস্ট find করে প্রথম উপদানটি আউটপুট হিসেবে দেখাবে।


// ৬. সিম্পল একটা জাভাস্ক্রিপ্ট অবজেক্ট এর কোন একটা প্রোপার্টিকে ভেরিয়েবল হিসেবে ডিক্লেয়ার করার জন্য destructuring ইউজ করো। array এর destructuring করবে আর সেটা করার জন্য তুমি এরে এর সেকেন্ড পজিশন এর উপাদান কে destructuring করে 'balance' নামক একটা ভেরিয়েবল এ রাখবে।

// object destructuring
const myObject = {
    name: 'Mohammad Ismail Hossain',
    scholl: 'Bokter Munshi Primary School',
    roll: 15,
}

const {name, scholl, roll} = myObject;
// console.log(`My name is ${name} and my school named is ${scholl} & my roll no is ${roll}`);

// array destructuring 
const numver = [10, 20, 30];
const [a, balance] = numver;
// console.log(balance)


// ৭. একদম প্রাথমিক স্টেপ হিসেবে jsonplaceholder এর ওয়েবসাইট থেকে ডাটা fetch করে সেটাকে কনসোল এ দেখাতে হবে। ধরো তুমি তাদের ওয়েবসাইট এ photos এর API এর লিংক কোনটা সেটা জাভাস্ক্রিপ্ট দিয়ে কোড করে সেই ডাটা কনসোল এ দেখতে পারতেছো কিনা। তারপর কয়েকটা কার্ড বানাবে (হতে পারে বুটস্ট্রাপ এর কার্ড) সেগুলা আবার তুমি html দিয়ে ওয়েবসাইট এ ছবি এবং ছবির নিচে ছবির টাইটেল দেখাবে। 


const dataLoad = () =>{
    fetch('https://jsonplaceholder.typicode.com/photos')
    .then(res => res.json())
    .then(data => displaydata(data.slice(0,20)))

}

const displaydata = (data) =>{
    // console.log(data)
    const cardItems = document.getElementById('card-items');
    cardItems.textContent = '';
    // console.log(cardItems)
    data.forEach(abc => {
        const {thumbnailUrl, title, url, albumId, id} = abc;
        // console.log(thumbnailUrl)
        const div = document.createElement('div');
        div.classList.add('col')
        div.innerHTML = `
        <div onclick = "modalData('${thumbnailUrl}', '${title}')" class="card">
            <img src="${thumbnailUrl}" class="card-img-top" alt="...">
            <div class="card-body">
                <h5 class="card-title text-center">${id}</h5>
                <p class="card-text">${title}</p>
            </div>
        </div> 
        `;
        cardItems.appendChild(div)
    })
}

// ৮. প্রত্যেকটা ফটোতে ক্লিক করলে উপরে আরেকটা div থাকবে। ক্লিক করার পর ডাইনামিকভাবে ওই ফটো এর ডাটা লোড করবে। সেটা করার জন্য আগের ডাটা লোড করার API এর লিংক এর পরে photos এর পরে ডাইনামিকভাবে ${id} বসিয়ে দিবে। এরপর ডিটেইল অংশে photo এর url দিয়ে মেইন ইমেজ এবং thumbnail ইমেজ দুইটাই দেখাবে। সাথে সাথে title প্রপার্টিও দেখাবে। 

const modalData = (thumbnailUrl, title) =>{
    const modalContainer = document.getElementById('modal-container');
    modalContainer.setAttribute("style", "width: 400px; heigth: 400px, display: flex; justify-content: center; align-items: center; margin: auto");  
    modalContainer.textContent = '';
    // modalContainer.style.width = '400px';
    // modalContainer.style.width = '400px';

    modalContainer.innerHTML = `
        <img src="${thumbnailUrl}" class="w-100" alt="...">
        <p>${title}</p>
    `;
   
}




dataLoad()







