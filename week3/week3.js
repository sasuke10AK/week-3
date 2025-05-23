// Kullanıcıdan bilgileri alıyoruz
const name = prompt("Adınızı girin:");
//const kullanmamızın sebebi degiştrilemiyecegi için ilerde kafa karşıklıgına sebep olmasın
let age = parseInt(prompt("Yaşınızı girin:"));
//burada parseınt kullanmamızın sebebi age tamamen sayı  türündedir  ve bu daha güvenilirdir . 

const country = prompt("Ülkenizi girin ").toLowerCase();
// burada toLowerCase kullamamızın sebebi şu örnegin kullanı ülkesini herflerini farklı boyutlarda girebilir öernegin:TÜrkiYe toLowerCase ise tüm harfleri küçük yapıp aynı konuma getirir.
const gender = prompt("Cinsiyetinizi girin (kadın / erkek):").toLowerCase();

// Koşulları kontrol ediyoruz
if (age > 18 && country === "türkiye") {
    if (gender === "kadın") {
        console.log("Hello madame, you are allowed to enter the site.");
    } else if (gender === "erkek") {
        console.log("Hello Sir, you are allowed to enter the site.");
    } else {
        console.log("Sorry, you are not allowed to enter the site.");
    }
} else {
    console.log("Sorry, you are not allowed to enter the site.");
}
