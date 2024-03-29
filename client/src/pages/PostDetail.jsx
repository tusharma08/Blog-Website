import React from 'react'
import PostAuthor from '../components/PostAuthor'
import { Link } from 'react-router-dom'
import Thumbnail from '../images/blog22.jpg'

const PostDetail = () => {
  return (
    <section className='post_detail'>
      <div className="container post_detail_container">
        <div className="post_detail_header">
          <PostAuthor/>
          <div className="post_detail_buttons">
            <Link to={`/post/werwer/edit`} className="btn sm primary">Edit</Link>
            <Link to={`/post/werwer/delete`} className="btn sm danger">Delete</Link>
          </div>
        </div>
        <h1>This is a Post Title!</h1>
        <div className="post_detail_thumbnail">
          <img src={Thumbnail} alt="" />
        </div>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Placeat eveniet ipsum natus molestias consectetur, quasi exercitationem quaerat odit porro qui ea et eaque asperiores, maiores nobis. Voluptatum harum repellendus ad dicta quos vel dolorum fugit animi eligendi? Commodi soluta provident magni, assumenda, vero nostrum sequi, quia blanditiis ducimus culpa voluptas?
        </p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Reiciendis quis, vero qui molestiae consequatur nostrum tempora hic voluptate voluptatibus vitae blanditiis. Adipisci nobis at, assumenda odit soluta distinctio architecto perferendis magnam officiis impedit nulla quasi in aperiam sapiente esse eum.
        </p>
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Quod officiis quaerat, molestias obcaecati aperiam dignissimos necessitatibus exercitationem placeat quae quam tenetur consequuntur atque, maxime delectus. Asperiores nisi commodi fuga in quo, nulla consequuntur provident corrupti voluptatibus quisquam mollitia minus possimus sequi quaerat! Illo sapiente ipsum ratione optio in reiciendis vero quae sed, esse harum dolore neque quas culpa nam provident eum repudiandae veritatis delectus inventore odit quidem!
        </p>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit, facilis repudiandae, molestiae assumenda cupiditate harum dolor autem atque omnis suscipit debitis, enim ratione voluptas et. Molestiae sunt fugit explicabo, ullam temporibus accusantium dolor sequi. Rem facere, fugiat quod cum dolore est, tenetur esse voluptas sequi in amet nemo sunt rerum optio eum. Numquam facilis veniam, hic tempora qui excepturi accusantium fugit perspiciatis minus asperiores, corporis ex repudiandae earum eos. Est, molestias nobis delectus necessitatibus ipsum quia impedit animi alias iste, accusamus eos perferendis, eum dolor ut rem quo doloremque? Harum numquam explicabo, deleniti nihil veritatis animi, unde consectetur nisi, inventore aut alias incidunt quisquam corporis? Sed deleniti et praesentium dignissimos.
        </p>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Temporibus alias voluptas consequuntur vitae omnis eius iste officiis ex asperiores laborum quae beatae distinctio soluta quod, perferendis nostrum laboriosam sit corporis animi! Nam veritatis delectus aut voluptatem sequi maxime aperiam aliquid labore, ut perferendis quos incidunt rerum iusto vitae! Illo magnam, nihil debitis quod voluptates aut explicabo ratione iusto cupiditate. Repudiandae quasi sit praesentium exercitationem vero! Accusamus placeat esse vitae dolorum iure ipsa temporibus illo sequi quam adipisci dolor odit odio, animi dolores, doloribus fugit inventore assumenda aperiam voluptatem a velit! Incidunt reiciendis quia repellat obcaecati blanditiis nesciunt! Nemo consequuntur doloribus quas ratione error harum sunt dolore rerum esse est temporibus libero commodi exercitationem, totam adipisci repellendus sint eius facere ut cum. Numquam laudantium iusto reiciendis dolore, eum obcaecati error harum architecto voluptatum, reprehenderit ad vero perspiciatis cumque, necessitatibus molestias magni. Repellat possimus distinctio sed veniam fugit quasi, nobis ut blanditiis, laudantium labore error aperiam? Quas blanditiis neque molestias. Labore est nostrum, repudiandae possimus iusto rerum odit sequi autem culpa? Alias quia ipsa eius assumenda nostrum voluptatibus, commodi atque omnis odit, natus consequatur dicta in veritatis ut quasi! Dolorem ut, consequatur et quasi perferendis, pariatur, recusandae repellat reprehenderit atque facere in?</p>
      </div>
    </section>
  )
}

export default PostDetail