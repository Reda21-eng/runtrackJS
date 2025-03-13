function jsonValueKey(jsonString, key) {
    try {
      // Parse the JSON string into an object
      const jsonObject = JSON.parse(jsonString);
      
      // Check if the key exists in the parsed object
      if (key in jsonObject) {
        return jsonObject[key];
      } else {
        return `La clé "${key}" n'existe pas dans l'objet JSON.`;
      }
    } catch (error) {
      return "Erreur : La chaîne JSON est invalide.";
    }
  }
  
  // Exemple d'utilisation
  const jsonString = '{"name": "Jean", "city": "Marseille", "age": 30}';
  const key = "city";
  console.log(jsonValueKey(jsonString, key)); 
