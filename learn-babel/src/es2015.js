const Hello = ({ name }) => {
  return `<p>Hello ${name} !</p>`;
};

const props = {
  name: 'Taro'
};

console.log(Hello(props));

