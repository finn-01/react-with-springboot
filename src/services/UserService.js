import axios from "axios";

const USERS_REST_API_URL =
	"https://springboot-heroku-t.herokuapp.com/api/users";

class UserService {
	getUsers() {
		return axios.get(USERS_REST_API_URL);
	}
}

export default new UserService();
