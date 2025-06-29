const siteMap = {
  public: {
    dashboard: "/",
    topics: "/topics",
    singIn: "/singIn",
    singUp: "/signUp",
    result: `/topics/:topicId/result`,
  },
  private: {
    registerTopic: "/register",
    createSession: `/topics/:topicId/session`,
    vote: `/topics/:topicId/vote`,
  },
};

export default siteMap;
