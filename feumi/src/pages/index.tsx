import { useEffect } from 'react';
import { history } from 'umi';

export default function IndexPage() {
  useEffect(() => {
    history.replace('/questions');
  }, []);

  return null;
}
