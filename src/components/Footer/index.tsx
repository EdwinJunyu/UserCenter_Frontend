import {GithubOutlined} from '@ant-design/icons';
import {DefaultFooter} from '@ant-design/pro-layout';
import {EDWIN_LINK} from "@/constants";

const Footer: React.FC = () => {
  const defaultMessage = 'Edwin';
  const currentYear = new Date().getFullYear();
  return (
    <DefaultFooter
      copyright={`${currentYear} ${defaultMessage}`}
      links={[
        {
          key: 'planet',
          title: '作者个人网页',
          href: EDWIN_LINK,
          blankTarget: true,
        },
        {
          key: 'codeNav',
          title: '***',
          href: EDWIN_LINK,
          blankTarget: true,
        },
        {
          key: 'github',
          title: <><GithubOutlined/> Edwin_GitHub</>,
          href: 'https://github.com',
          blankTarget: true,
        },

      ]}
    />
  );
};

export default Footer;
