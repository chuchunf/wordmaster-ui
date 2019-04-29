import { AppUser } from './appuser';
import { Badge } from './badge';

export class User {
  user: AppUser;
  badges: Badge[];
  jwt: String;
}
