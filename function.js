window.function = async function () {
  // Use fetch API to get detailed IP address information
  const response = await fetch('http://ip-api.com/json/');
  const data = await response.json();

  // Return the detailed information
  return data;
}
