import {HeaderLayout} from "../components/layouts/HeaderLayout";
import '../styles/Home.less';

export default function Home() {
  return (
      <HeaderLayout>
        <div className={'content'}>
            <div className={'gongrats'}>
                Hello
            </div>
        </div>
      </HeaderLayout>
  )
}
