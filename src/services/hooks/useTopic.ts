import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { type NewTopicPayload, type VotePayload } from "../../interface/topic";
import { topicService } from "../topic";

export const useTopic = (page: number = 1) => {
  return useQuery({
    queryKey: ["topics", page],
    queryFn: () => topicService.list(page),
  });
};

export const useCreateTopic = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: (data: NewTopicPayload) => topicService.create(data),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["topics"] });
    },
  });
};

export const useOpenSession = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: ({ topicId, payload }: { topicId: number; payload?: any }) =>
      topicService.openSession(topicId, payload),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["topics"] });
    },
  });
};

export const useVote = () => {
  return useMutation({
    mutationFn: ({
      topicId,
      payload,
    }: {
      topicId: number;
      payload: VotePayload;
    }) => topicService.vote(topicId, payload),
  });
};

export const useVotingResult = (topicId: number) => {
  return useQuery({
    queryKey: ["topicResult", topicId],
    queryFn: () => topicService.getResult(topicId),
    enabled: !!topicId,
  });
};
