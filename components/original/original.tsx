
import stl from "./original.module.scss";
import SingleRect from "./singleRect";

const Original = () => {
  return (
    <section id='original' className={stl.container}>
      <ul>
        <li>
          <SingleRect
            imgLink={"https://www.yueimg.com/en/images/1_2x.c8ad31e9.jpg"}
            title='Original Stories'
            subtitle='A webnovel site for everyone'
          />
        </li>
        <li>
          <SingleRect
            imgLink={"https://www.yueimg.com/en/images/2_2x.6dc6f318.jpg"}
            title='Becoming an Author'
            subtitle='Write novels. Get paid'
          />
        </li>
        <li>
          <SingleRect
            imgLink={"https://www.yueimg.com/en/images/3_2x.4bcc58c4.jpg"}
            title='Book of Authors'
            subtitle='A guide on how to become a popular author'
          />
        </li>
      </ul>
    </section>
  );
};

export default Original;
