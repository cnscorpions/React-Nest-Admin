const host =
  process.env.NODE_ENV !== "production"
    ? "http://localhost:23000"
    : "https://admin.ligouhai.cn";

const LOOKUP_USERS = "users";
const LOOKUP_FILES = "files";

const getUrl = type => {
  switch (type) {
    case LOOKUP_USERS:
      return `${host}/user/list`;
    case LOOKUP_FILES:
      return `${host}/file/list`;
    default:
      break;
  }
};

export { getUrl };
