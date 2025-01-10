import { useState } from "react";
import { Input, Button, Select, toast } from "@medusajs/ui";
import { MediaType } from "../../types";

type CreateMedia = {
  type: MediaType;
  file?: File;
};

type Props = {
  onSuccess?: () => void;
};

const CreateDigitalProductForm = ({ onSuccess }: Props) => {
  const [name, setName] = useState("");
  const [medias, setMedias] = useState<CreateMedia[]>([]);
  const [productTitle, setProductTitle] = useState("");
  const [loading, setLoading] = useState(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    // TODO handle submit
  };

  return (
    <form onSubmit={onSubmit}>
      <Input
        name="name"
        placeholder="Name"
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <fieldset className="my-4">
        <legend className="mb-2">Media</legend>
        <Button type="button" onClick={onAddMedia}>
          Add Media
        </Button>
        {medias.map((media, index) => (
          <fieldset className="my-2 p-2 border-solid border rounded">
            <legend>Media {index + 1}</legend>
            <Select
              value={media.type}
              onValueChange={(value) =>
                changeFiles(index, {
                  type: value as MediaType,
                })
              }
            >
              <Select.Trigger>
                <Select.Value placeholder="Media Type" />
              </Select.Trigger>
              <Select.Content>
                <Select.Item value={MediaType.PREVIEW}>Preview</Select.Item>
                <Select.Item value={MediaType.MAIN}>Main</Select.Item>
              </Select.Content>
            </Select>
            <Input
              name={`file-${index}`}
              type="file"
              onChange={(e) =>
                changeFiles(index, {
                  file: e.target.files[0],
                })
              }
              className="mt-2"
            />
          </fieldset>
        ))}
      </fieldset>
      <fieldset className="my-4">
        <legend className="mb-2">Product</legend>
        <Input
          name="product_title"
          placeholder="Product Title"
          type="text"
          value={productTitle}
          onChange={(e) => setProductTitle(e.target.value)}
        />
      </fieldset>
      <Button type="submit" isLoading={loading}>
        Create
      </Button>
    </form>
  );
};

const onAddMedia = () => {
  setMedias((prev) => [
    ...prev,
    {
      type: MediaType.PREVIEW,
    },
  ]);
};

const changeFiles = (index: number, data: Partial<CreateMedia>) => {
  setMedias((prev) => [
    ...prev.slice(0, index),
    {
      ...prev[index],
      ...data,
    },
    ...prev.slice(index + 1),
  ]);
};

const uploadMediaFiles = async (type: MediaType) => {
  const formData = new FormData();
  const mediaWithFiles = medias.filter(
    (media) => media.file !== undefined && media.type === type,
  );

  if (!mediaWithFiles.length) {
    return;
  }

  mediaWithFiles.forEach((media) => {
    formData.append("files", media.file);
  });

  const { files } = await fetch(`/admin/digital-products/upload/${type}`, {
    method: "POST",
    credentials: "include",
    body: formData,
  }).then((res) => res.json());

  return {
    mediaWithFiles,
    files,
  };
};
export default CreateDigitalProductForm;
