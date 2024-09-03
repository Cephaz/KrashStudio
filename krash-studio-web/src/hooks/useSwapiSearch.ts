import {useEffect} from 'react';
import {useDebounce} from 'use-debounce';
import {useAppDispatch, useAppSelector} from '../store/hooks';
import {searchSwapi} from '../store/actions';
import {selectQuery, selectCategory} from '../store/selectors';

export const useSwapiSearch = () => {
  const dispatch = useAppDispatch();
  const query = useAppSelector(selectQuery);
  const category = useAppSelector(selectCategory);
  const [debouncedQuery] = useDebounce(query, 300);

  useEffect(() => {
    if (debouncedQuery) {
      dispatch(searchSwapi({query: debouncedQuery, category}));
    }
  }, [debouncedQuery, category, dispatch]);

  return {query, category};
};
