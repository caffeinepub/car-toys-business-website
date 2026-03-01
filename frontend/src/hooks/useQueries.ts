import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useActor } from './useActor';
import type { Toy } from '../backend';

export function useGetAllToys() {
  const { actor, isFetching } = useActor();

  return useQuery<Toy[]>({
    queryKey: ['toys'],
    queryFn: async () => {
      if (!actor) return [];
      return actor.getAllToys();
    },
    enabled: !!actor && !isFetching,
  });
}

export function useGetToy(id: string) {
  const { actor, isFetching } = useActor();

  return useQuery<Toy | null>({
    queryKey: ['toy', id],
    queryFn: async () => {
      if (!actor) return null;
      return actor.getToy(id);
    },
    enabled: !!actor && !isFetching && !!id,
  });
}

export function useAddToy() {
  const { actor } = useActor();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async (toy: Toy) => {
      if (!actor) throw new Error('Actor not initialized');
      return actor.addToy(toy.id, toy.name, toy.description, toy.price, toy.category);
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['toys'] });
    },
  });
}
