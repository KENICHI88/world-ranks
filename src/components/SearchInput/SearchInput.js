import Head from 'next/head';
import styles from './SearchInput.module.css';

import SearchRounded from '@material-ui/icons/SearchRounded';

const SearchInput = ({children, ...rest}) => {
  return <div className={styles.wrapper}>
    <SearchRounded />
    <input className={styles.input}  {...rest}/>
  </div>
}


export default SearchInput;
