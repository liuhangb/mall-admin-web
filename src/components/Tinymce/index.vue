<template>
  <div class="tinymce-container editor-container">
    <editor v-model="editorValue"
            :init="init"
            :disabled="disabled"
            @onClick="onClick">
    </editor>
<!--    <div class="editor-custom-btn-container">-->
<!--      <editorImage color="#1890ff" class="editor-upload-btn" @successCBK="imageSuccessCBK"></editorImage>-->
<!--    </div>-->
  </div>
</template>

<script type="text/javascript">
  import editorImage from './components/editorImage'

  import tinymce from 'tinymce/tinymce'
  import Editor from '@tinymce/tinymce-vue'
  import 'tinymce/themes/silver'
  import 'tinymce/plugins/image'// 插入上传图片插件
  import 'tinymce/plugins/media'// 插入视频插件
  import 'tinymce/plugins/table'// 插入表格插件
  import 'tinymce/plugins/lists'// 列表插件
  import 'tinymce/plugins/wordcount'// 字数统计插件
  import 'tinymce/plugins/advlist'
  export default {
    name: 'tinymce',
    components: {
      editorImage,
      Editor
    },
    props: {
      value: {
        type: String,
        default: ''
      },
      height: {
        type: Number,
        required: false,
        default: 360
      },
      width: {
        type: Number,
        required: false,
        default: 720
      },
      disabled: {
        type: Boolean,
        default: false
      },
      plugins: {
        type: [String, Array],
        default: `advlist anchor autolink autosave code codesample colorpicker colorpicker
  contextmenu directionality emoticons fullscreen hr image imagetools importcss insertdatetime
  legacyoutput link lists media nonbreaking noneditable pagebreak paste preview print save searchreplace
  spellchecker tabfocus table template textcolor textpattern visualblocks visualchars wordcount`
      },
      toolbar: {
        type: [String, Array],
        default: `bold italic underline strikethrough alignleft aligncenter alignright outdent indent  blockquote undo redo removeformat hr bullist numlist link image charmap	 preview anchor pagebreak fullscreen insertdatetime media table forecolor backcolor`
      }
    },
    data() {
      return {
        hasChange: false,
        hasInit: false,
        tinymceId: this.id || 'vue-tinymce-' + +new Date(),
        init: {
          language_url: '/tinymce/langs/zh_CN.js',
          language: 'zh_CN',
          skin_url: '/tinymce/skins/ui/oxide',
          // skin_url: '/tinymce/skins/ui/oxide-dark',//暗色系
          height: 300,
          plugins: this.plugins,
          toolbar: this.toolbar,
          branding: false,
          menubar: false,
          // 此处为图片上传处理函数，这个直接用了base64的图片形式上传图片，
          // 如需ajax上传可参考https://www.tiny.cloud/docs/configure/file-image-upload/#images_upload_handler
          images_upload_handler: (blobInfo, success, failure) => {
            const img = 'data:image/jpeg;base64,' + blobInfo.base64()
            success(img)
          }
        },
        editorValue: this.value
      }
    },
    watch: {
      value(newValue) {
        this.editorValue = newValue
        console.log('value: ' + newValue)
      },

      editorValue(newValue) {
        this.$emit('input', newValue)
        console.log('editorValue: ' + newValue)
      }
    },
    mounted() {
      this.initTinymce()
    },
    activated() {
      this.initTinymce()
    },
    deactivated() {
      this.destroyTinymce()
    },

    methods: {
      initTinymce() {
        console.error("tinymce initTinymce this.toolbar.length" + this.toolbar.length)
        tinymce.init({})
      },
      onClick (e) {
        this.$emit('onClick', e, tinymce)
      },
      destroyTinymce() {
        if (window.tinymce.get(this.tinymceId)) {
          window.tinymce.get(this.tinymceId).destroy()
        }
      },
      setContent(value) {
        window.tinymce.get(this.tinymceId).setContent(value)
      },
      getContent() {
        window.tinymce.get(this.tinymceId).getContent()
      },
      imageSuccessCBK(arr) {
        const _this = this
        arr.forEach(v => {
          window.tinymce.get(_this.tinymceId).insertContent(`<img class="wscnph" src="${v.url}" >`)
        })
      }
    },
    destroyed() {
      this.destroyTinymce()
    }
  }
</script>

<style scoped>
  .tinymce-container {
    position: relative;
  }

  .tinymce-container >>> .mce-fullscreen {
    z-index: 10000;
  }

  .tinymce-textarea {
    visibility: hidden;
    z-index: -1;
  }

  .editor-custom-btn-container {
    position: absolute;
    right: 10px;
    top: 2px;
    /*z-index: 2005;*/
  }

  .editor-upload-btn {
    display: inline-block;
  }
</style>
