import sweetPosts from "./sweet-insta-posts";

// Contents of turtle textboxes, for containers/BabieGiftPage
const sweetTexts = [
  '',
  'omigosh haiiiiii!! :3',
  'Need help with gardening? I can tur-till the soil for you :3',
  'Zoey <3 Eevee 4ever',
  'Are you a taser? because you\'re stunning!',
  'I hope your birthday is one shell of a time!!',
  '*turtle noises*',
  'Redeem code \'50KISSES\' to receive 50 kisses!',
];

sweetTexts[0] = `Fun fact: there are ${sweetPosts.filter(
  ([postId, whichSlides]) => (whichSlides === null || whichSlides === 'all')
).length + sweetTexts.length} turtles on this page :3`;

export default sweetTexts;
