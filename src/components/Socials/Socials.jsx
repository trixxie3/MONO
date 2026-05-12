import './_Socials.scss';
import TelegramIcon from '../../assets/svg/telegram.svg';
import VkIcon from '../../assets/svg/vk.svg';
import YoutubeIcon from '../../assets/svg/youtube.svg';
import TiktokIcon from '../../assets/svg/tiktok.svg';

export default function Socials() {
  return (
    <div className="socials">
      <a className="socials__btn" href="#!">
        <img className="socials__btn-icon" src={TelegramIcon} alt="телеграм" />
      </a>
      <a className="socials__btn" href="#!">
        <img className="socials__btn-icon" src={VkIcon} alt="вк" />
      </a>
      <a className="socials__btn" href="#!">
        <img className="socials__btn-icon" src={YoutubeIcon} alt="ютуб" />
      </a>
      <a className="socials__btn" href="#!">
        <img className="socials__btn-icon" src={TiktokIcon} alt="тикток" />
      </a>
    </div>
  );
}
