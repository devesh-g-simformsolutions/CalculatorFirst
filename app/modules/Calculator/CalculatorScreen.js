import React, {useState} from 'react';
import {View, Text, Button, TextInput} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {act} from 'react-test-renderer';
import actionTypes from '../../redux/actions';
import AppStyles from '../../themes/AppStyles';
import styles from './CalculatorStyles';

const CalculatorScreen = () => {
  const dispatch = useDispatch();
  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const output = useSelector(state => state.calculator.output);
  return (
    <View style={AppStyles.screenContainer}>
      <View style={styles.cardContainer}>
        <TextInput
          style={styles.textContainer}
          onChangeText={setNumber1}
          placeholder="Enter first number."
          keyboardType="number-pad"
        />
        <TextInput
          placeholder="Enter Second number"
          onChangeText={setNumber2}
          style={styles.textContainer}
          keyboardType="number-pad"
        />
        <View style={styles.buttonContainer}>
          <Button
            style={styles.button}
            title="+"
            onPress={() => {
              dispatch({
                type: actionTypes.addition,
                payload: {input1: parseInt(number1), input2: parseInt(number2)},
              });
            }}
          />
          <Button
            title="-"
            style={styles.button}
            onPress={() => {
              dispatch({
                type: actionTypes.subtract,
                payload: {input1: parseInt(number1), input2: parseInt(number2)},
              });
            }}
          />
          <Button
            title="*"
            onPress={() => {
              dispatch({
                type: actionTypes.multiply,
                payload: {input1: parseInt(number1), input2: parseInt(number2)},
              });
            }}
          />
          <Button
            title="/"
            onPress={() => {
              dispatch({
                type: actionTypes.division,
                payload: {input1: parseInt(number1), input2: parseInt(number2)},
              });
            }}
          />
          <Button
            title="%"
            onPress={() => {
              dispatch({
                type: actionTypes.modulus,
                payload: {input1: parseInt(number1), input2: parseInt(number2)},
              });
            }}
          />
        </View>
        <View
          style={{
            alignItems: 'center',
            borderRadius: 10,
            borderColor: 'black',
            borderWidth: 2,
            margin: 20,
            alignContent: 'center',
            padding: 10,
          }}>
          <Text>{output}</Text>
        </View>
      </View>
    </View>
  );
};

export default CalculatorScreen;
