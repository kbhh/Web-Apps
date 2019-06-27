<template>
  <div>
    <el-row>
 <el-carousel height="400px" indicator-position="inside">
      <el-carousel-item v-for="slide in slides" :key="slide.id">
        <el-row :gutter="0" style="padding:0; margin: 0">
          <el-col :span="14"> 
          <img :src="slide.img" style="width:95%">

          </el-col>
          <el-col :span="10">
            <h3>{{slide.title}}</h3>
            <p> {{ slide.desc}}</p>
          </el-col>
        </el-row>
       
    </el-carousel-item>
  </el-carousel>
    </el-row>
    <br>
    <br>   
    <el-row :gutter="10">
    <el-col v-for="(product, i) in products" :key="i" :span="6" >
     <el-card class="box-card" style="padding: 0px; width: 100%">
       <img :src="'http://localhost:3030/' + product.image"  style="padding: 0px;margin: 0px" class="image">
                <div style="padding: 14px;">
                    <h3>{{product.name}}</h3>
                    <h5>Type: {{product.ptype}}</h5>
                    <h5>Price: {{product.price}}</h5>
                    <h5>Quality: {{product.quality}}</h5>
                    <h5>Product Describition</h5> <p> {{ product.desc | min}}</p>
                                  
                 </div>
    </el-card>
     </el-col>
 
    </el-row>
    
  </div>
</template>

<script>
export default {
  data () {
    return {
      products: undefined,
      slides: [
        {id: 1, img: '../../static/img/Resize.jpg', title: 'ፍሲካ', desc: 'ፋሲካ አምላክ በ1513 ዓ.ዓ. እስራኤላውያንን ከግብፅ ባርነት ነፃ ያወጣበትን ጊዜ ለማስታወስ አይሁዳውያን የሚያከብሩት በዓል ነው። አምላክ ይህን ትልቅ ቦታ የሚሰጠው በዓል አቢብ በተባለው ወር (ይህ ወር ከጊዜ በኋላ ኒሳን ተብሎ ተጠርቷል) በ14ኛው ቀን በየዓመቱ እንዲያከብሩ እስራኤላውያንን አዟቸው ነበር።'},
        {id: 2, img: '../../static/img/f13de054f8474a88ff80e40ae303d234.jpg', title: 'መስቀል', desc: 'ቤተ ክርስቲያን የክርስቲያኖችን መንፈሳዊ ሕይወት ከዕለት ዕለት በጋለ ሁኔታ ለማሻሻል እንዲረዳ በዓመቱ ውስጥ በተለያዩ ጊዜያት የተለያዩ በዓላትን ታከብራለች ከእነዚህም በዓላት በጣም በደመቀ ሁኔታና በታላቅ ደስታ የሚከበረው የልደት በዓል ነው፡፡ ለዚህም ዋናው ምክንያት የክርስቶስ ልደት የእምነታችን መክፈቻ በር በመሆኑ ብቻ ሳይሆን ሁኔታው ከማህበራዊ ህይወታችን ጋር የተያያዘ በመሆኑ ነው፡፡ ይህም ማለት በየትኛውም የዓለም ክፍል አዲስ ህፃን ተወልዶ ወደ ህብረተሰቡ በሚቀላቀልበት ጊዜ የሚኖረው ደስታና ፈንጠዝያ በጣም ከፍተኛ ነው፡፡ የህፃኑም ልደት በየዓመቱ በሚከበርበት ጊዜ በመጀመሪያ የቤተሰቡ ከዚያም የወዳጅ ዘመድና የጓደኛ ደስታ ፍፁም ልዩ ነው እንዲሁም የክርስቶስ ልደት በክርስቲያን ቤተሰቦች ዘንድ በትልቅ ጉጉትና ደስታ የሚጠበቅ ልዩ ቀን ነው ማለት ይቻላል፡፡'},
        {id: 3, img: '../../static/img/Lalibela_Priests_Singing_Genna_small.jpg', title: 'ልደት', desc: 'ቤተ ክርስቲያን የክርስቲያኖችን መንፈሳዊ ሕይወት ከዕለት ዕለት በጋለ ሁኔታ ለማሻሻል እንዲረዳ በዓመቱ ውስጥ በተለያዩ ጊዜያት የተለያዩ በዓላትን ታከብራለች ከእነዚህም በዓላት በጣም በደመቀ ሁኔታና በታላቅ ደስታ የሚከበረው የልደት በዓል ነው፡፡ ለዚህም ዋናው ምክንያት የክርስቶስ ልደት የእምነታችን መክፈቻ በር በመሆኑ ብቻ ሳይሆን ሁኔታው ከማህበራዊ ህይወታችን ጋር የተያያዘ በመሆኑ ነው፡፡ ይህም ማለት በየትኛውም የዓለም ክፍል አዲስ ህፃን ተወልዶ ወደ ህብረተሰቡ በሚቀላቀልበት ጊዜ የሚኖረው ደስታና ፈንጠዝያ በጣም ከፍተኛ ነው፡፡ የህፃኑም ልደት በየዓመቱ በሚከበርበት ጊዜ በመጀመሪያ የቤተሰቡ ከዚያም የወዳጅ ዘመድና የጓደኛ ደስታ ፍፁም ልዩ ነው እንዲሁም የክርስቶስ ልደት በክርስቲያን ቤተሰቦች ዘንድ በትልቅ ጉጉትና ደስታ የሚጠበቅ ልዩ ቀን ነው ማለት ይቻላል፡፡'}
      ]
    }
  },
  computed: {},
  methods: {
    detail (id) {
      this.$router.push('/prodetail/' + id)
    }
  },
  mounted () {
    this.$store.dispatch('product/find', {query: {status: 2}}).then((res) => { this.products = res.data })
  }
}
</script>

<style>
  .time {
    font-size: 13px;
    color: #999;
  }
  
  .bottom {
    margin-top: 13px;
    line-height: 12px;
  }

  .button {
    padding: 0;
    float: right;
  }

  .image {
    width: 100%;
    max-height: 200px;
    display: block;
  }

  .clearfix:before,
  .clearfix:after {
      display: table;
      content: "";
  }
  
  .clearfix:after {
      clear: both
  }
  
</style>
