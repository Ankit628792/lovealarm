
const generateRssXml = (products) => {
  const feed = `
    <?xml version="1.0" encoding="UTF-8"?>
    <rss version="2.0">
      <channel>
        <title>Love Alarm 2.0</title>
        <link>${process.env.host}</link>
        <description>An app that lets the user know if someone who loves them is in their vicinity. It is now possible to ring someone's alarm in real life. When you and the other person come within 10m radius, your crush's alarm will go off</description>
        ${products.map((product) => `
          <item>
            <title>${product.name}</title>
            <link>${process.env.host}/${product.slug}</link>
            <pubDate>${new Date(product.date).toUTCString()}</pubDate>
            <description>${product.description}</description>
            <enclosure url="${product.image}" type="image/jpeg" />
          </item>
        `).join('')}
      </channel>
    </rss>
  `;
  return feed;
};

export default function Rss() {
  const products = [
    {
      name: 'Home',
      slug: '',
      date: new Date(),
      description: `Presenting Love Alarm 2.0 - A new way to tell someone, you like them. When you and the other person come within 10m radius, your crush's alarm will go off`,
      image: `${process.env.host}/android-chrome-512x512.png`,
    },
    {
      name: 'How It Works',
      slug: 'how-it-works',
      date: new Date(),
      description: `Learn how to use love alarm app: how to ring alarm, stop ringing, initiating a conversation, temporarily disable account and much more. Explore now, Love alarm 2.0 provide you what you have expected`,
      image: `${process.env.host}/android-chrome-512x512.png`,
    },
    {
      name: 'Our Story',
      slug: 'our-story',
      date: new Date(),
      description: `The concept of Love alarm 2.0 originated from the netflix original series Love Alarm that is based on the Daum webtoon of the same name by Chon Kye-young. In a world where an app alerts people if someone in the vicinity likes them, Kim Jojo experiences young love while coping with personal adversities.`,
      image: `${process.env.host}/android-chrome-512x512.png`,
    },
    {
      name: 'Contact us',
      slug: 'contact-us',
      date: new Date(),
      description: `Contact us on Love alarm 2.0 contact page if you have any questions and facing any issue. We're happy to hear from you! Contact us today and speak with one of our customer service representatives — and make your experience with us that much more pleasant!`,
      image: `${process.env.host}/android-chrome-512x512.png`,
    },
    {
      name: `FAQ's`,
      slug: 'frequently-asked-questions',
      date: new Date(),
      description: `Contact us on Love alarm 2.0 contact page if you have any questions and facing any issue. We're happy to hear from you! Contact us today and speak with one of our customer service representatives — and make your experience with us that much more pleasant!`,
      image: `${process.env.host}/android-chrome-512x512.png`,
    },

  ];

  const rssXml = generateRssXml(products);

  return (
    <div className="flex-grow p-5">
      <textarea
        rows={16}
        style={{ width: '100%' }}
        readOnly
        value={rssXml}
      />
    </div>
  );
}
