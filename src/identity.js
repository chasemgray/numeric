import diag from './diag';
import rep from './rep';

export default function identity(n) {
  return diag(rep([n], 1));
}
