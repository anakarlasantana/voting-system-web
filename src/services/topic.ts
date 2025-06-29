import { api } from "./api";
import type { NewTopicPayload, Topic, VotePayload } from "../interface/topic";
import type { PaginatedResponse } from "../interface/pagination";
import type { ISession } from "../interface/session";

export const topicService = {
  list: async (page = 1): Promise<PaginatedResponse<Topic>> => {
    return api.get(`topics/?page=${page}`).then((res) => res.data);
  },

  create: async (payload: NewTopicPayload): Promise<Topic> => {
    return api.post("topics/", payload).then((res) => res.data);
  },

  openSession: async (
    topicId: number,
    payload?: { duration_minutes?: number }
  ): Promise<ISession> => {
    const params = payload?.duration_minutes
      ? `?duration_minutes=${payload.duration_minutes}`
      : "";
    return api
      .post(`topics/${topicId}/session/${params}`)
      .then((res) => res.data);
  },

  vote: async (topicId: number, payload: VotePayload): Promise<any> => {
    return api.post(`topics/${topicId}/vote/`, payload).then((res) => res.data);
  },

  getResult: async (topicId: number): Promise<any> => {
    return api.get(`topics/${topicId}/result/`).then((res) => res.data);
  },
};
