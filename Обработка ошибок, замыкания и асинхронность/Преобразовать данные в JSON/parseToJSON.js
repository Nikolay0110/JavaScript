export const parseToJSON = function (data) {
  let json = null;
   try {
        json = JSON.parse(data);
        }
    catch (error) {
        json = {};
    }
    return json;
};