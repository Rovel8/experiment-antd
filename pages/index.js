import {HeaderLayout} from "../components/layouts/HeaderLayout";
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
      <HeaderLayout>
        <div className={styles.content}>
            <div className={styles.gongrats}>
                Hello
            </div>
        </div>
      </HeaderLayout>
  )
}
