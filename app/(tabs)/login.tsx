import React from 'react';
import { StyleSheet } from 'react-native';
import ParallaxScrollView from '@/components/ParallaxScrollView';
import { ThemedText } from '@/components/ThemedText';
import { ThemedView } from '@/components/ThemedView';
import { TextInput } from '@/components/TextInput';
import { Button } from '@/components/Button';
import { IconSymbol } from '@/components/ui/IconSymbol';

export default function LoginScreen() {
  const [username, setUsername] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [isLoggedIn, setIsLoggedIn] = React.useState(false);
  const [isWrongCredentials, setIsWrongCredentials] = React.useState(false);

  const handleLogin = () => {
    if (password === "password") {
      setIsLoggedIn(true);
      setIsWrongCredentials(false);
    }
    else {
      setIsWrongCredentials(true);
    }
  };

  const handleLogout = () => {
    setUsername('');
    setPassword('');
    setIsLoggedIn(false);
    setIsWrongCredentials(false);
  };

  return (
    <ParallaxScrollView
      headerBackgroundColor={{ light: '#FFA500', dark: '#8B4513' }}
      headerImage={
        <IconSymbol
          size={310}
          color="#FFB900"
          name="key.horizontal"
          style={styles.headerImage}
        />
      }>
      <ThemedView style={styles.titleContainer}>
        <ThemedText type="title">Login</ThemedText>
      </ThemedView>
      <ThemedView style={styles.messageContainer}>
        {isLoggedIn ? (
          <>
            <ThemedText>Welcome, {username}!</ThemedText>
            <Button title="Log out" onPress={handleLogout} />
          </>
        ) : (
          <>
            {isWrongCredentials && (
              <ThemedText style={{ color: 'red' }}>Wrong credentials! Please, try again.</ThemedText>
            )}
            <ThemedText>User, welcome to our app! Please, sign in to access all the premium features</ThemedText>
            <ThemedView style={styles.inputContainer}>
              <TextInput
                testID="username" // Corrected prop name
                style={styles.input}
                placeholder="Username"
                placeholderTextColor="#808080"
                value={username}
                onChangeText={(text: any) => setUsername(text)}
              />
              <TextInput
                testID="password" // Corrected prop name
                style={styles.input}
                placeholder="Password"
                placeholderTextColor="#808080"
                secureTextEntry
                value={password}
                onChangeText={(text: any) => setPassword(text)}
              />
              <Button title="Sign-in" onPress={handleLogin} />
            </ThemedView>
          </>
        )}
      </ThemedView>
    </ParallaxScrollView>
  );
}

const styles = StyleSheet.create({
  headerImage: {
    color: '#FFB900',
    bottom: -90,
    left: -35,
    position: 'absolute',
  },
  titleContainer: {
    flexDirection: 'row',
    gap: 8,
  },
  messageContainer: {
    padding: 20,
    alignItems: 'center',
  },
  inputContainer: {
    width: '100%',
    padding: 20,
  },
  input: {
    height: 50,
    borderColor: '#808080',
    borderWidth: 1,
    marginBottom: 20,
    paddingHorizontal: 10,
    borderRadius: 5,
  },
});
