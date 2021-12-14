import React from 'react';

export default class MyComponent extends React.Component {
  render() {
    return <div><input 
    onChange={(event) => {this.setState({input: event.target.value})}}
    type="text" /></div>;

  }
}




it("should create an entry in component state", () => {
  //given 
  const component = shallow(<MyComponent />);
  const form = compoment.find('input');
  //when
  form.props().onChange({target:{
    name: 'myName',
    value: 'myValue'
  }});
  //then
  expect(component.state('input')).toBeDefined();
});
it("should create an entry in component state with the event value", () => {
  //given 
  const component = shallow(<MyComponent />);
  const form = component.find('input');
  //when
  form.props().onChange({traget: {
    name: 'myName',
    value: 'myValue'
  }});
  //then 
  expect(component.state('input')).toEqual('myValue');
});