import { useState } from 'react';
import { StyleSheet, View, Text, TouchableOpacity } from 'react-native';

export default function Calculator() {
  const [display, setDisplay] = useState('');
  const [result, setResult] = useState('');
  const [history, setHistory] = useState([]);

  const handlePress = (value) => {
    if (value === '=') {
      calculateResult();
    } else if (value === 'C') {
      clearDisplay();
    } else if (value === '«') {
      // Backspace
      setDisplay((prevDisplay) => prevDisplay.slice(0, -1));
    } else if (value === '%') {
      // Percentage
      setDisplay((prevDisplay) => (parseFloat(prevDisplay) / 100).toString());
    } else if (value === '±') {
      // Add negative value
      setDisplay((prevDisplay) => {
        const num = parseFloat(prevDisplay);
        return num === 0 ? '0' : (-num).toString();
      });
    } else {
      setDisplay((prevDisplay) => prevDisplay + value);
    }
  };

  const calculateResult = () => {
    try {
      const calculatedResult = eval(display);
      setResult(calculatedResult.toString());
      setHistory((prevHistory) => [
        ...prevHistory,
        calculatedResult.toString(),
      ]);
    } catch (error) {
      setResult('Error');
    }
  };

  const clearDisplay = () => {
    setDisplay('');
    setResult('');
  };

  return (
    <View style={styles.container}>
      <View style={styles.displayContainer}>
        <View style={styles.memoryContainer}> {history.slice(-5).map((item, index) => (
          <Text key={index} style={styles.memoryText}>
            {item}
          </Text>
        ))}
        </View>
        <Text style={styles.displayText}>{display}</Text>
        <Text style={styles.resultText}>{result}</Text>
      </View>

      <View style={styles.buttonsContainer}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('C')}>
          <Text style={styles.buttonCancel}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('«')}>
          <Text style={styles.buttonBackspace}>«</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('%')}>
          <Text style={styles.buttonPercent}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('/')}>
          <Text style={styles.buttonOperator}>÷</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('7')}>
          <Text style={styles.buttonText}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('8')}>
          <Text style={styles.buttonText}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('9')}>
          <Text style={styles.buttonText}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('*')}>
          <Text style={styles.buttonMulti}>x</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('4')}>
          <Text style={styles.buttonText}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('5')}>
          <Text style={styles.buttonText}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('6')}>
          <Text style={styles.buttonText}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('-')}>
          <Text style={styles.buttonOperator}>–</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('1')}>
          <Text style={styles.buttonText}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('2')}>
          <Text style={styles.buttonText}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('3')}>
          <Text style={styles.buttonText}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('+')}>
          <Text style={styles.buttonOperator}>+</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('±')}>
          <Text style={styles.buttonText}>±</Text>
        </TouchableOpacity>
        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('0')}>
          <Text style={styles.buttonText}>0</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('.')}>
          <Text style={styles.buttonText}>.</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.button}
          onPress={() => handlePress('=')}>
          <Text style={styles.buttonCalculate}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#171818',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  displayContainer: {
    width: '100%',
    padding: 20,
    alignItems: 'flex-end',
    flex: 1,
    justifyContent: 'flex-end',
  },
  displayText: {
    color: '#dae4e6',
    fontSize: 36,
    marginBottom: 10,
    textAlignVertical: 'bottom',
  },
  resultText: {
    color: '#00a1d5',
    fontSize: 24,
    textAlignVertical: 'bottom',
  },
  memoryContainer: {
    flexDirection: 'column',
    flexWrap: 'wrap',
    alignItems: 'end',
    marginBottom: 10,
  },
  memoryText: {
    color: '#918062',
    fontSize: 18,
  },
  buttonsContainer: {
    paddingTop: 20,
    borderTopWidth: 0.5,
    borderColor: '#dae4e6',
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  button: {
    width: '25%',
    height: 80,
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 0,
    borderColor: 'gray',
  },
  buttonText: {
    color: '#dae4e6',
    fontSize: 24,
  },
  buttonOperator: {
    color: '#36db03',
    fontSize: 34,
  },
  buttonBackspace: {
    color: '#00a1d5',
    fontSize: 36,
    paddingBottom: 8,
  },
  buttonPercent: {
    color: '#f7a600',
    fontSize: 22,
  },
  buttonMulti: {
    color: '#36db03',
    fontSize: 26,
  },
  buttonCalculate: {
    color: '#00a1d5',
    fontSize: 34,
  },
  buttonCancel: {
    color: 'red',
    fontSize: 24,
  },
});